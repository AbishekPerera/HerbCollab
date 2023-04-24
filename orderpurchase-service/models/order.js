import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
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
  productImage: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  commission: {
    type: Number,
    required: true,
  },
  // deliveryname,deliveryemail,deliveryphone,deliveryaddress
  deliveryname: {
    type: String,
    required: true,
  },
  deliveryemail: {
    type: String,
    required: true,
  },
  deliveryphone: {
    type: String,
    required: true,
  },
  deliveryaddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

export const Order = mongoose.model("Order", orderSchema);
