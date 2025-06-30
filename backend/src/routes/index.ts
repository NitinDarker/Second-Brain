import { Router } from "express";

export const v1Router = Router();

v1Router.post("/signup", () => {});

v1Router.post("/signin", () => {});

v1Router.get("/content", () => {});

v1Router.post("/content", () => {});

v1Router.delete("/content", () => {});

v1Router.post("/brain/share", () => {});

v1Router.get("/brain/:shareLink", () => {});
