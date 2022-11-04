import * as express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL || "");

app.use(cors())
require("./models/user");
require("./models/order");
require("./models/item");

const routers = [
  // import routers here
  require("./routes/public").default,
]


routers.forEach(router => {
  app.use(router);
});


// run the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



