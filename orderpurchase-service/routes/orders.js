import express from "express";
const orderRouter = express.Router();
import { Order } from "../models/order.js";

// add to order
orderRouter.route("/addtoorder").post((req, res) => {
  const userId = req.body.userId;
  const username = req.body.username;
  const productId = req.body.productId;
  const productName = req.body.productName;
  const productImage = req.body.productImage;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const total = Number(req.body.total);
  const commission = Number(req.body.commission);

  const newOrder = new Order({
    userId,
    username,
    productId,
    productName,
    productImage,
    quantity,
    price,
    total,
    commission,
  });

  newOrder
    .save()
    .then(() => res.json("Order added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all orders
orderRouter.route("/getallorders").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default orderRouter;
