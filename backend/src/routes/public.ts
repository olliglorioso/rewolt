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
  console.log(req.body)
  if(!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Missing email or password",
    });
  }
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
  return res.json({
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
  // check if email is already in use

  const user2 = await User.findOne({email});
  if(user2) {
    return res.status(400).json({
      message: "Email is already in use",
    });
  }

  const user = new User({
    email,
    password: await bcrypt.hash(password, 10),
  });

    
  await user.save();
  return res.status(201).json({
    message: "User created",
  });
});

export default router;