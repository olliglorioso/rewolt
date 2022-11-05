import mongoose from "mongoose";


const dropoffSchema = new mongoose.Schema({
  friendlyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Dropoff = mongoose.model("Dropoff", dropoffSchema);

export default Dropoff;