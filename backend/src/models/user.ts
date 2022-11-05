import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  phone: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  }
});



const User = mongoose.model<IUser>("User", userSchema);

export default User;