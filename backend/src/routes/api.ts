import { Router } from "express";
import Item from "../models/item";

const router = Router();

router.get("/api/items", async (req, res) => {
  // get all items
  const items = await Item.find();
  return res.json(items);
});

export default router;