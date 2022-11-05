import mongoose from "mongoose";


const dropoffSchema = new mongoose.Schema({
  friendName: {
    type: String,
    required: true,
  },
  position: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  }
});

const Dropoff = mongoose.model("Dropoff", dropoffSchema);

export default Dropoff;