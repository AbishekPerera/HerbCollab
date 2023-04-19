import express from "express";
const cartRouter = express.Router();
import { Cart } from "../models/cart.js";

// add to cart
cartRouter.route("/addtocart").post((req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const total = Number(req.body.total);

  const newCart = new Cart({
    userId,
    productId,
    quantity,
    price,
    total,
  });

  newCart
    .save()
    .then(() => res.json("Cart added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// get all carts
cartRouter.route("/getallcarts").get((req, res) => {
  Cart.find()
    .then((carts) => res.json(carts))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get carts by userid
cartRouter.route("/getcartbyuserid/:userId").get((req, res) => {
  const userId = req.params.userId;
  Cart.find({ userId }) // Query the Cart model for all documents that have a userId property equal to the provided userId
    .then((carts) => res.json(carts))
    .catch((err) => res.status(400).json({ error: "Error finding cart" }));
});

// delete cart by userId and productId
cartRouter.route("/deletecart/:userId/:productId").delete((req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  Cart.findOneAndDelete({ userId, productId })
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json({ error: "Error deleting cart" }));
});

// delete item from carts by id
cartRouter.route("/deletecartitem/:id").delete((req, res) => {
  const id = req.params.id;
  Cart.findByIdAndDelete(id)
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json({ error: "Error deleting cart" }));
});

//update quantity and total of cart by id
cartRouter.route("/updatecart/:id").put((req, res) => {
  const id = req.params.id;
  const quantity = Number(req.body.quantity);
  const total = Number(req.body.total);

  Cart.findById(id)
    .then((cart) => {
      cart.quantity = quantity;
      cart.total = total;

      cart
        .save()
        .then(() => res.json("Cart updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
export default cartRouter;
