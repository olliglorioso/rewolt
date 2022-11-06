import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    phone: string;
}
declare const User: mongoose.Model<IUser, {}, {}, {}, any>;
export default User;
