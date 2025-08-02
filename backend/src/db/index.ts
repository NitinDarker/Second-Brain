import mongoose, { Schema, ObjectId, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoURI = process.env.MONGODB_URI as string;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const tagSchema = new Schema({
  title: { type: String, require: true, unique: true },
});

const contentSchema = new Schema({
  link: { type: String, require: true },
  title: { type: String, require: true },
  tag: [{ type: Schema.Types.ObjectId, ref: "tag" }],
  userId: { type: Schema.Types.ObjectId, ref: "user", require: true },
  type: {
    type: String,
    require: true,
    enum: ["image", "video", "article", "audio"],
  },
});

const linkSchema = new Schema({
  hash: { type: String, require: true },
  userId: { type: Schema.Types.ObjectId, ref: "user", require: true },
});

export const userModel = model("user", userSchema);
export const tagModel = model("tag", tagSchema);
export const contentModel = model("content", contentSchema);
export const linkModel = model("link", linkSchema);
