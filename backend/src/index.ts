import * as express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/test";

mongoose.connect(DB_URL);

require("./models/user");

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



