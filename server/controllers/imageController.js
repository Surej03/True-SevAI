import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async(req, res) => {
    try {
        const {userId, prompt} = req.body;

        const user = await userModel.findById(userId);

        if(!user || !prompt){
            return res.json({success: true, message: "Missing Details"})
        }

        if(user.creditBalance === 0 || userModel.creditBalance <= 0) {
            return res.json({success: false, message: "No Credit Balance", creditBalance: user.creditBalance})
        }

        const formData = new FormData()
        formData.append("prompt", prompt)

        const response = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            // using this arraybuffer we have to img to base64
            responseType: 'arraybuffer'
        })
        // using base64 we have to create image url
         const base64Image = Buffer.from(response.data, 'binary').toString("base64")

         const resultImage = `data:image/png;base64, ${base64Image}`
//Now have to send the resultimage in the response before that creditbalance has to be verified and 1 credit has to be detucted for each generated image
         await userModel.findByIdAndUpdate(user._id, {creditBalance: user.creditBalance - 1})

         res.json({success: true, message: "Image Generated",creditBalance: user.creditBalance - 1, resultImage})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}