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
    html:
      "<!DOCTYPE html>" +
      '<html lang="en">' +
      "<head>" +
      '<meta charset="UTF-8" />' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
      "<title>HerbCollab Payment Success</title>" +
      "</head>" +
      "<body>" +
      '<table style="width: 100%; border-collapse: collapse;">' +
      "<tr>" +
      '<td style="text-align: center;">' +
      '<img src="https://github.com/AbishekPerera/img/blob/main/logo1.png?raw=true" alt="HerbCollab Logo" style="height: 100px; margin-bottom: 20px;" />' +
      "</td>" +
      "</tr>" +
      "</table>" +
      "<h1>Thank you for your payment!</h1>" +
      "<p>Dear Customer,</p>" +
      "<p>We are pleased to confirm that your payment for the following items has been successfully processed:</p>" +
      "<p>If you have any questions about your order or your payment, please don't hesitate to contact us at 011-2955 671 or reply to this email.</p>" +
      "<p>Thank you for choosing HerbCollab herbal pharmacy. We look forward to serving you again in the future.</p>" +
      "<p>Sincerely,</p>" +
      "<p>The HerbCollab Team</p>" +
      "</body>" +
      "</html>",
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
