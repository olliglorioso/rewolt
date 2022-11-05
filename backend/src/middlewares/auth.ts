import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import User from "../models/user";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const requireLogin = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }

  const splitToken = token.split(" ");
  if (splitToken[0] !== "Bearer") {
    return res.status(401).json({
      message: "You must be logged in",
    });
  };

  const jwtToken = splitToken[1];
  try {
    const payload = jwt.verify(jwtToken, JWT_SECRET) as { userId: string };
    const { userId } = payload;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        message: "You must be logged in",
      });
    }
    req.body.userId = payload.userId;
    req.body.user = user;
  } catch (err) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }
  return next();
};

