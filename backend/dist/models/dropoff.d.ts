import mongoose from "mongoose";
declare const Dropoff: mongoose.Model<{
    friendlyName: string;
    address: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    friendlyName: string;
    address: string;
}>>;
export default Dropoff;
