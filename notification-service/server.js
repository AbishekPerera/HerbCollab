import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mail from "./routes/mail.js";

const app = express();

const PORT = process.env.PORT || 8079;
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

  app.use("/mail",mail );
