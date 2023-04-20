import express from "express";
const ratereviewRouter = express.Router();
import { RateReview } from "../models/ratereview.js";

//Adding a new rate review
ratereviewRouter.route("/addratereview").post((req, res) => {
    const userId = req.body.userId;
    const customerName = req.body.customerName;
    const productId = req.body.productId;
    const sellerId = req.body.sellerId;
    const sellerRating = Number(req.body.sellerRating);
    const productRating = Number(req.body.productRating);
    const productReview = req.body.productReview;
    const sellerReview = req.body.sellerReview;
    
    const newRateReview = new RateReview({
        userId,
        customerName,
        productId,
        sellerId,
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
ratereviewRouter.route("/getratereviewbyproductid/:productId").get((req, res) => {
    const productId = req.params.productId;
    RateReview.find({  productId:  productId })
    .then((ratereviews) => res.json(ratereviews))
    .catch((err) => res.status(400).json("Error: " + err));
});   

//Get all rate reviews by seller id
ratereviewRouter.route("/getratereviewbysellerid/:sellerId").get((req, res) => {
    const sellerId = req.params.sellerId;
    RateReview.find({  sellerId:  sellerId })
    .then((ratereviews) => res.json(ratereviews))
    .catch((err) => res.status(400).json("Error: " + err));
});



// //Update rate review by user id,product id and seller id
// ratereviewRouter.route("/updateratereview/:userId/:productId/:sellerId").put((req, res) => {
//     const userId = req.params.userId;
//     const productId = req.params.productId;
//     const sellerId = req.params.sellerId;
//     const newRateReview = {
//         productRating: req.body.productRating,
//         productReview: req.body.productReview,
//         sellerRating: req.body.sellerRating,
//         sellerReview: req.body.sellerReview
//     };
// });





// //Delete rate review by user id and seller id,product id and seller id
// ratereviewRouter.route("/deleteratereview/IT5656/SELL111/PROD111").delete((req, res) => {
//     const userId = req.params.userId;
//     const sellerId = req.params.sellerId;
//     const productId = req.params.productId;
//     RateReview.findOneAndDelete({ userId: userId, sellerId: sellerId, productId: productId })
//         .then(() => res.json("Rate review deleted!"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });





export default ratereviewRouter;