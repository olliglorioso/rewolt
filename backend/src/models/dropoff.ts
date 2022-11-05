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
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
});

const Dropoff = mongoose.model("Dropoff", dropoffSchema);

export default Dropoff;