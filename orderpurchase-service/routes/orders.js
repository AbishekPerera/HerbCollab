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
  const sellerId = req.body.sellerId;
  const sellerName = req.body.sellerName;
  const deliveryname = req.body.deliveryname;
  const deliveryaddress = req.body.deliveryaddress;
  const deliveryphone = req.body.deliveryphone;
  const deliveryemail = req.body.deliveryemail;

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
    deliveryname,
    deliveryemail,
    deliveryphone,
    deliveryaddress,
    sellerId,
    sellerName,
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

//get orders by userId and status (for customer)
orderRouter
  .route("/getorderbyuseridandstatus/:userId/:status")
  .get((req, res) => {
    const userId = req.params.userId;
    const status = req.params.status;

    Order.find({ userId, status })
      .then((orders) => res.json(orders))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//get orders by userId (for customer)
orderRouter.route("/getorderbyuserid/:userId").get((req, res) => {
  const userId = req.params.userId;

  Order.find({ userId })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get orders by status (for admin)
orderRouter.route("/getorderbystatus/:status").get((req, res) => {
  const status = req.params.status;

  Order.find({ status })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update order status
orderRouter.route("/updateorderstatus/:id").put((req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  Order.findByIdAndUpdate(id, { status }, { new: true })
    .then((updatedOrder) => res.json(updatedOrder))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get orders by sellerId (for seller)
orderRouter.route("/getorderbysellerid/:sellerId").get((req, res) => {
  const sellerId = req.params.sellerId;

  Order.find({ sellerId })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete order
orderRouter.route("/deleteorder/:id").delete((req, res) => {
  const id = req.params.id;

  Order.findByIdAndDelete(id)
    .then(() => res.json("Order deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

orderRouter.route("/getorderbyid/:id").get(async (req, res) => {
  let id = req.params.id;

  const order = await Order.findById(id)
    .then((order) => {
      res.status(200).send({ order });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ err });
    });
});

export default orderRouter;
