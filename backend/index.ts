import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/test";

mongoose.connect(DB_URL);







// run the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



