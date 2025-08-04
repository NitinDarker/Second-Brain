import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { userModel } from "../db";

dotenv.config();
const jwtKey = process.env.JWT_KEY as string;

export default async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required.",
    });
  }

  try {
    const foundUser = await userModel.findOne({ username: username });

    if (!foundUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid username",
      });
    }

    const hashPassword: string = foundUser.password as string;

    const passwordMatch = await bcrypt.compare(password, hashPassword);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ id: foundUser._id }, jwtKey);
    return res.status(200).json({
      success: true,
      message: `Welcome back! ${foundUser.username}`,
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      success: false,
      message: "User login error!",
    });
  }
}
