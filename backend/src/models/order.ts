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
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "bought"]
  }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;