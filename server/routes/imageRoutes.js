import express from 'express';
import { generateImage } from "../controllers/imageController.js";
import authenticateToken from '../middleware/auth.js';

const imageRouter = express.Router();

imageRouter.post("/generate-image", authenticateToken, generateImage)
export default imageRouter;