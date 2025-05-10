import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ errors: err.errors });
  }

  console.error(err);
  return res.status(500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;
