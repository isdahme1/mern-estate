import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

app.use("/api/user", userRouter);
