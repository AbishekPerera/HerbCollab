import express from "express";
const ratereviewRouter = express.Router();
import { RateReview } from "../models/ratereview.js";

//Adding a new rate review
ratereviewRouter.route("/addratereview").post((req, res) => {
  const userId = req.body.userId;
  const customerName = req.body.customerName;
  const productId = req.body.productId;
  const productName = req.body.productName;
  const productImage = req.body.productImage;
  const sellerId = req.body.sellerId;
  const sellerName = req.body.sellerName;
  const sellerRating = Number(req.body.sellerRating);
  const productRating = Number(req.body.productRating);
  const productReview = req.body.productReview;
  const sellerReview = req.body.sellerReview;

  const newRateReview = new RateReview({
    userId,
    customerName,
    productId,
    productName,
    productImage,
    sellerId,
    sellerName,
    sellerRating,
    productRating,
    productReview,
    sellerReview,
  });

  newRateReview
    .save()
    .then(() => res.json("Rate Review added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all rate reviews by user id
ratereviewRouter.route("/getratereviewbyuserid/:userId").get((req, res) => {
  const userId = req.params.userId;
  RateReview.find({ userId: userId })
    .then((ratereviews) => res.json(ratereviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get all rate reviews by product id
ratereviewRouter
  .route("/getratereviewbyproductid/:productId")
  .get((req, res) => {
    const productId = req.params.productId;
    RateReview.find({ productId: productId })
      .then((ratereviews) => res.json(ratereviews))
      .catch((err) => res.status(400).json("Error: " + err));
  });

//Get all rate reviews by seller id
ratereviewRouter.route("/getratereviewbysellerid/:sellerId").get((req, res) => {
  const sellerId = req.params.sellerId;
  RateReview.find({ sellerId: sellerId })
    .then((ratereviews) => res.json(ratereviews))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update rate review
ratereviewRouter.route("/updateratereviewbyid/:id").put((req, res) => {
  const id = req.params.id;

  RateReview.findById(id)
    .then((ratereview) => {
      if (!ratereview) res.status(404).json({ error: "Rate review not found" });
      else {
        ratereview.sellerRating =
          req.body.sellerRating || ratereview.sellerRating;
        ratereview.productRating =
          req.body.productRating || ratereview.productRating;
        ratereview.productReview =
          req.body.productReview || ratereview.productReview;
        ratereview.sellerReview =
          req.body.sellerReview || ratereview.sellerReview;
        ratereview.sellerName = req.body.sellerName || ratereview.sellerName;
        ratereview.productName = req.body.productName || ratereview.productName;

        ratereview
          .save()
          .then(() => res.json("Rate review updated!"))
          .catch((err) => res.status(400).json("Error: " + err));
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete rate review
ratereviewRouter.route("/deleteratereviewbyid/:id").delete((req, res) => {
  const id = req.params.id;
  RateReview.findByIdAndDelete(id)

    .then(() => res.json("Rate review deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default ratereviewRouter;
