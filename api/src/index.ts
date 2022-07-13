import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import postRouter from './router/post';
dotenv.config();

const app = express();



app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],  
}))

app.use("/post", postRouter);
app.get("/", (req,res) => {
    res.send("Hello World");
})


app.listen(3001, () => console.log('Server is running on port 3001'));