import { Router } from "express";
import Dropoff from "../models/dropoff";
import Order from "../models/order";
import { createDelivery, getFee } from "../lib/wolt";
const router = Router();

router.get("/api/dropoffs", async (req, res) => {
  // get all dropoffs
  const dropoffs = await Dropoff.find({});
  return res.json(dropoffs);
});

router.post("/api/fee", async (req, res) => {
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

  const fee = await getFee(dropoff.address, "Korkeavuorenkatu 5, 00100 Helsinki");
  return res.json(fee);
});


router.post("/api/order", async (req, res) => {
  if(!req.user) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }
  const { dropoffId, title, category } = req.body as {
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
    user: req.user,
    title: req.body.title,
    category: req.body.category,
  });
  await order.save();
  let delivery;
  try {
    delivery = await createDelivery(
      dropoff.address,
      "Korkeavuorenkatu 5, 00100 Helsinki",
      "come fast",
      {
        name: req.user.email,
        phone: req.user.phone,
      },
      {
        name: dropoff.friendlyName,
        phone: "+358404938574",
      },
      title,
      category,
      order._id.toString()
    );
  } catch(err){
    return res.status(400).json({
      message: "Error creating delivery",
    });
  }
  
  return res.json({
    order,
    delivery
  });
});

export default router;