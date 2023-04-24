import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({origin:true,credentials: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(bodyParser.json());
app.use(express.json());

dotenv.config();

import userRouter from "./routes/user-routes.js";
import authRouter from "./routes/auth.js"



const PORT = process.env.PORT || 8074;

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
      console.log("Mongo DB connected! ✅");
    })
  )
  .catch((err) => console.log(err));


app.use("/users",userRouter );
app.use("/users",authRouter );