import express, { Request, Response } from "express";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.use("/api/users", userRouter);
