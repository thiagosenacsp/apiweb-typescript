import express from "express";
import type { Request, Response, NextFunction } from "express";
import usuarioRouter from "./routers/usuarioRouter.js";

const app = express();

app.use(express.json());

app.get("/", usuarioRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

export default app;
