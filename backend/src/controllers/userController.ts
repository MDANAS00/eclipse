import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { createUserSchema } from "../utils/zodValidation.js";

const prisma = new PrismaClient(); // ✅ Instantiate Prisma Client

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate request body with Zod schema
    const parsedBody = createUserSchema.parse(req.body);
    const { email, name } = parsedBody;

    const user = await prisma.user.create({
      // ✅ Use lowercase "user"
      data: { email, name },
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  console.log("WORKING");
  res.status(200);
};
