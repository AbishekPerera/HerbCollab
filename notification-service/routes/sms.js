import { Router } from "express";
import TeleSignSDK from "telesignsdk";

const router = Router();

const customerId = "3E8AD515-A331-4C68-B24C-AF4AF057F599";
const apiKey =
  "VybgcnTB4WIXl7Ku3EQNoaYiVtt34bwxBQvMJTAf9V0XCr5ZwA0TgyUkttQV6VGW9vFFBs8EWdf3y1l92h1EUg==";
const restEndpoint = "https://rest-api.telesign.com";
const timeout = 10000; // 10 seconds

const client = new TeleSignSDK(customerId, apiKey, restEndpoint, timeout);

router.post("/sendSms", async (req, res, next) => {
  const phoneNumber = req.body.phoneNumber;
  const message =
    "Payment Success.Your Order has placed.Thank you for your purchase.";
  const messageType = "ARN";

  client.sms.message(
    (error, responseBody) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
      } else {
        console.log(responseBody);
        res.sendStatus(200);
      }
    },
    phoneNumber,
    message,
    messageType
  );
});

export default router;
