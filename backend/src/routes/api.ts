import { Router } from "express";
import Category from "../models/category";

const router = Router();

router.get("/api/categories", async (req, res) => {
  const categories = await Category.find();
  return res.json(categories);
});

export default router;