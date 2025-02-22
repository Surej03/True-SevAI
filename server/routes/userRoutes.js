import express from "express";
import {register, login, usesrCredits, razorpayGateway, verifyRazorpay} from "../controllers/userController.js"
import authenticateToken from "../middleware/auth.js";

const userRouter = express.Router()

//Routes
// authenticateToken will convert the token as user_id
 userRouter.post("/register", register);
 userRouter.post("/login", login);
 userRouter.get("/credits", authenticateToken, usesrCredits);
 userRouter.post("/razorpay", authenticateToken, razorpayGateway);
 userRouter.post("/verifyrazorpay", verifyRazorpay);


export default userRouter;