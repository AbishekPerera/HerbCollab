import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ratereviewSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  sellerRating: {
    type: Number,
    required: true,
  },
  productRating: {
    type: Number,
    required: true,
  },
  productReview: {
    type: String,
    required: true,
  },
  sellerReview: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const RateReview = mongoose.model("RateReview", ratereviewSchema);
