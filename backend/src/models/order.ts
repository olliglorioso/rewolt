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
  items: [
    {
      category: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      }
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

export default Order;