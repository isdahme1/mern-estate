import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
