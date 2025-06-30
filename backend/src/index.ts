import express, { Response, Request, ErrorRequestHandler, NextFunction } from "express";
import { v1Router } from "./routes"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", v1Router)

// Landing Page
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Second Brain!",
  });
});

// Catch-All Middleware
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route does not exist!",
  });
});

// Error Handling Middleware
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "Sorry! Something has occurred on our end!",
  });
  console.error(err);
});

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
