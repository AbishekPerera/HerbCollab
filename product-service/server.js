import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 8071;
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

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

import productRouter from "./routes/Products.js";
app.use("/products", productRouter);
