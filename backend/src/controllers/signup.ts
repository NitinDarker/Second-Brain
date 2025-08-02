import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import zod from "zod";
import { userModel } from "../db";
import { Request, Response } from "express";

dotenv.config();
const jwtKey = process.env.JWT_KEY as string;

const zodUser = zod.object({
  username: zod
    .string()
    .min(1, "Username is required")
    .max(12, "Username cannot exceed 12 characters"),
  password: zod
    .string()
    .min(4, "Password must be at least 4 characters long.")
    .max(20, "Password cannot exceed 20 characters."),
});

export default async function signupUser(req: Request, res: Response) {
  const validation = zodUser.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: "User created failed!",
      error: validation.error,
    });
  }

  const { username, password } = validation.data;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new userModel({
    username: username,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Username already taken",
    });
  }

  const token = jwt.sign({ id: newUser._id }, jwtKey);
  res.status(200).json({
    success: true,
    message: "New user successfully created!",
    username: username,
    token: token,
  });
}
