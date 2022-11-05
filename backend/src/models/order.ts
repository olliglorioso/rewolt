import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dropoff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dropoff",
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;