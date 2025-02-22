import jwt from "jsonwebtoken";

const authenticateToken = async(req, res, next) =>{
    const {token} = req.headers;

    if (!token) {
        return res.json({success: false, messsage: "Unauthorized"})
    }
    // if token is available
    try {
        const tokenDecoded = jwt.verify(token, process.env.SECRET_KEY);

        if(tokenDecoded.id){
            req.body.userId = tokenDecoded.id;
        }else{
            return res.json({success: false, messsage: "Unauthorized"})
        }
        // it will execute controller method 
        next();
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export default authenticateToken;