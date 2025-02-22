import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import razorpay from "razorpay";
import transactionModels from "../models/transactionModels.js";

// register
export const register = async(req, res) => {
    try {
        const {name, email, password}  = req.body

        if (!name || !email || !password){
            return res.json({success: false, message: "Missing Details!"})
        }
        // salt is for password security and salt is generated by random alg and it generates diff hash eventhough the pwd is same
        //Default salt value is 10. The more the number the more secure the pwd, but slower the hashing
        const salt = await bcrypt.genSalt(10)
        // password + salt = hashedPassword
        const hashedPassword = await bcrypt.hash(password, salt)
        
        // storing user details in userData and we have created userData from the user response
        const userData = {
            name,
            email,
            password: hashedPassword
        }
        // Storing the userData in mongoDb
        const newUser = new userModel(userData);
        const user = await newUser.save()

        // whenever user is created in the db it automatically creates id using user_id and with this unique id will generate token
        const token = jwt.sign({id: user._id},process.env.SECRET_KEY, { expiresIn: '8h' })


        res.json({success: true, token, user: {name: user.name}})
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// login
export const login = async (req, res)=>{
    try {
        // retriving email and pwd from body
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: "User does not exist!"})
        }

        // if user is exist will check the password using compare method
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch){
            const token = jwt.sign({id: user._id},process.env.SECRET_KEY, { expiresIn: '8h' })

            res.json({success: true, token, user: {name: user.name}})

        }else {
            return res.json({success: false, message: "Invalid credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// userCredits
export const usesrCredits = async(req, res)=> {
    try {
        const {userId} = req.body

        const user = await userModel.findById(userId)
        res.json({success:true, credits: user.creditBalance, user: {name: user.name}})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// payment gateway
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export const razorpayGateway = async (req, res)=> {
    try {
        const {userId, planId} = req.body

        const user = await userModel.findById(userId)

        if( !userId || !planId){
            return res.json({success: false, message: "Missing Details"})
        }
        let credits, plan, amount, date

        // based on planId we create credits, amount
        switch (planId) {
            case "Basic":
                plan = "Basic",
                credits = 100,
                amount = 10
                break;

            case "Advanced":
                plan = "Advanced",
                credits = 500,
                amount = 50
                break;
            
            case "Business":
                plan = "Business",
                credits = 5000,
                amount = 250
                break;
             
            default:
                return res.json({success: false, message: "Plan not found"});
        }
        // for storing the current date
        date = Date.now();

        // store plan, credits, amount, date 
        const transactionData = {
            userId, plan, credits, amount, date
        }
        // It will store the transac data in mongodb
        const newTransaction = await transactionModels.create(transactionData);

        // creating options in order to create orders
        // calculating amount with 100. Coz razorpay consider amount decimals for eg. $155 will be 1.55 so multiple with 100
        // receipt in order to verify the razorpay payment for that we have to generate unique ._id
        const options = {
            amount: amount * 100,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id
        }
        // Creating order
        await razorpayInstance.orders.create(options, (error, order)=> {
            if (error){
                console.log(error)
                return res.json({success: false, message: error})
            }
            res.json({success: true, order})
        })

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export const verifyRazorpay = async(req, res) => {
    try {
        
        const {razorpay_order_id} = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

        if (orderInfo.status === "paid") {
            const transactionData = await transactionModels.findById(orderInfo.receipt)

            if (transactionData.payment){
                return res.json({success: false, message: "Payment Failed!"})
            }
            const userData = await userModel.findById(transactionData.userId)

            const creditBalance = userData.creditBalance + transactionData.credits

            await userModel.findByIdAndUpdate(userData._id, {creditBalance})

            await transactionModels.findByIdAndUpdate(transactionData._id, {payment: true})

            res.json({success: true, message: "Credits Added"})
        } else{
            res.json({success: false, message: "Payment Failed"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message});
    }
}