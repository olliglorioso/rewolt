import { Router } from "express";
import User from "../models/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const router = Router();

interface LoginPayload {
  email: string;
  password: string;
}

router.post("/api/login", async (req, res) => {
  // login
  const { email, password } = req.body as LoginPayload;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({
      message: "Password is incorrect",
    })
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  res.json({
    token,
  });
});

interface Register{
  email: string;
  password: string;
}
router.post("/api/register", async (req, res) => {
  // register

  const {email, password} = req.body as Register;
  
  const user = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });
    
  await user.save();
});

export default router;