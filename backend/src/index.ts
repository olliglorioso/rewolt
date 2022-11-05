import * as express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import * as cors from "cors";
import { IUser } from "./models/user";
import { DB_URL } from "./constants";

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
    }
  }
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static("../build"))
mongoose.connect(DB_URL || "");
app.use(express.json())
app.use(cors())

require("./models/user");
require("./models/order");
require("./models/dropoff");

const routers = [
  // import routers here
  require("./routes/public").default,
]

routers.forEach(router => {
  app.use(router);
});

// require token
app.use(require("./middlewares/auth").requireLogin);

app.use(require("./routes/api").default);


// run the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



