import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
await connectDB();

// Routes
app.use("/user", userRouter)
app.use("/image", imageRouter)

app.all("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
  });

app.listen(PORT, ()=> {
    console.log(`App is running at port ${PORT}`)
})