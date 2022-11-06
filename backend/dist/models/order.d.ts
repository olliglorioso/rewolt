import mongoose from "mongoose";
declare const Order: mongoose.Model<{
    category: string;
    title: string;
    price: number;
    status: "pending" | "bought";
    user?: mongoose.Types.ObjectId | undefined;
    dropoff?: mongoose.Types.ObjectId | undefined;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    category: string;
    title: string;
    price: number;
    status: "pending" | "bought";
    user?: mongoose.Types.ObjectId | undefined;
    dropoff?: mongoose.Types.ObjectId | undefined;
}>>;
export default Order;
