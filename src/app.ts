import express from "express";
import type { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

export default app;
