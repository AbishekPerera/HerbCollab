import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.route("/sendMail").post([], async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "herbcollabstore@gmail.com",
      pass: "nthoktjtleeygtaf",
    },
  });

  const { to } = req.body;
  const mailOptions = {
    from: "herbcollabstore@gmail.com",
    to: to,
    subject: "HERBCOLLAB Payment Success",
    html: "<h1><Payment Success.Your Order has placed</h1><p>Thank you for your purchase</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.sendStatus(200);
});

export default router;
