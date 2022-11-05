import { Router } from "express";
import Dropoff from "../models/dropoff";
import Order from "../models/order";
const router = Router();

router.get("/api/dropoffs", async (req, res) => {
  // get all dropoffs
  const dropoffs = await Dropoff.find({});
  return res.json(dropoffs);
});

router.post("/api/order", async (req, res) => {
  const { dropoffId } = req.body as {
    dropoffId: string;
    title: string;
    category: string;
  };
  const dropoff = await Dropoff.findById(dropoffId);
  if (!dropoff) {
    return res.status(400).json({
      message: "Dropoff not found",
    });
  }
  const order = new Order({
    dropoff,
    user: req.body.user,
    title: req.body.title,
    category: req.body.category,
  });
  await order.save();
  return res.json(order);
});

export default router;