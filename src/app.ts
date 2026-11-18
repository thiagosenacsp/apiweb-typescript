import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json);

app.use("./", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

export default app;
