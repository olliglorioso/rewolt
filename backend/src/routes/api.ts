import { Router } from "express";
import Dropoff from "../models/dropoff";
import Order from "../models/order";
import { createDelivery, getFee } from "../lib/wolt";
import { getDumpLocation } from "../lib/dumplocation";
import User from "../models/user";
const router = Router();

router.get("/api/dropoffs", async (req, res) => {
  // get all dropoffs
  const dropoffs = await Dropoff.find({});
  return res.json(dropoffs);
});

router.post("/api/listing/deliveryprice", async (req, res) => {
  // get delivery price
  const { orderId, address } = req.body;
  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(400).json({
      message: "Order not found",
    });
  }
  const dropoff = await Dropoff.findById(order.dropoff);
  if (!dropoff) {
    return res.status(400).json({
      message: "Dropoff not found",
    });
  }
  console.log("dropoff", dropoff.address, address);
  const fee = await getFee(dropoff.address, address);
  return res.json({
    fee,
  });
});

router.post("/api/buy", async (req, res): Promise<void> => {
  // buy
  const { orderId, address, comment } = req.body;
  const order = await Order.findById(orderId);
  if (!order || order.status !== "pending") {
    res.status(400).json({
      message: "Order not found",
    });
    return;
  }
  const dropoff = await Dropoff.findById(order.dropoff);
  if (!dropoff) {
    res.status(400).json({
      message: "Dropoff not found",
    });
    return;
  }

  const seller = await User.findById(order.user);

  if(!seller) {
    res.status(400).json({
      message: "Seller not found",
    });
    return;
  }
  if(!req.user){
    res.status(400).json({
      message: "User not found",
    });
    return;
  }
  await createDelivery(
    dropoff.address,
    address,
    `dropoff - ${order.title} - ${order.category}`,
    {
      name: seller.email,
      phone: seller.phone,
    },
    {
      name: req.user.email,
      phone: req.user.phone,
    },
    order.title,
    order.category,
    order._id.toString(),
    comment
  )
  order.status = "bought";
  await order.save();
});

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
  try {  
    if(!req.user) {
      return res.status(401).json({
        message: "You must be logged in",
      });
    }
    console.log(req.body)
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
    console.log("ready")
    return res.status(200).json({ "dog": "cat" })
  } catch (e) {
    console.log(e)
    return res.status(400)
  }
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
  let delivery;
  try {

    delivery = await createDelivery(
      dropoff.address,
      dumpLocation.streetAddress,
      "dropoff box - " + title + " - " + category,
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
      "",
      ""
    );
    // create a new order and save it to mongodb
    
  } catch(err){
    return res.status(400).json({
      message: "Error creating delivery",
    });
  }
  
  return res.json({
    delivery
  });
});

router.get("/api/history", async (req, res) => {
  try {
  const ordersByUser = await Order.find({user: req.user?._id})
  console.log(ordersByUser)
  return res.status(200).json(ordersByUser)
  } catch (err) {
    console.log(err)
    return res.status(400).json({message: "some error"})
  }
})


export default router;