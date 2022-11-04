import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;