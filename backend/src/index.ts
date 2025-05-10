import { PrismaClient } from "@prisma/client";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
