import { Router } from "express";
import Dropoff from "../models/dropoff";
import Order from "../models/order";
import { createDelivery, getFee } from "../lib/wolt";
import { getDumpLocation } from "../lib/dumplocation";
const router = Router();

router.get("/api/dropoffs", async (req, res) => {
  // get all dropoffs
  const dropoffs = await Dropoff.find({});
  return res.json(dropoffs);
});

router.post()

router.post("/api/fee", async (req, res) => {
  const { dropoffId, category } = req.body as {
    dropoffId: string;
    category: string;
  };
  const dropoff = await Dropoff.findById(dropoffId);
  if (!dropoff) {
    return res.status(400).json({
      message: "Dropoff not found",
    });
  }
  const dumpLocation = await getDumpLocation(dropoff.lat, dropoff.lon, category);
  const fee = await getFee(dropoff.address, dumpLocation.streetAddress);
  return res.json(fee);
});



router.get("/api/listing", async (req, res) => {
  if(!req.user){
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const orders = await Order.find({status: "pending"});
  return res.json(orders);
})

router.post("/api/listing", async (req, res) => {
  if(!req.user) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }
  const { dropoffId, title, category, price } = req.body as {
    dropoffId: string;
    title: string;
    category: string;
    price: number;
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
    title: title,
    category: category,
    price,
    status: "pending"
  });
  await order.save();
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
    
  const dumpLocation = await getDumpLocation(dropoff.lat, dropoff.lon, category);
  console.log(dumpLocation);
  let delivery;
  try {

    delivery = await createDelivery(
      dropoff.address,
      dumpLocation.streetAddress,
      "come fast",
      {
        name: req.user.email,
        phone: req.user.phone || "+358404342342",
      },
      {
        name: dumpLocation.streetAddress,
        phone: dumpLocation.phoneNumber,
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