import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import app from "../index.js";


const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("Database connection established!");
  })
  .catch((err) => {
    console.log("Error connecting to database‼️");
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
