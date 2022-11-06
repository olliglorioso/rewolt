import mongoose from "mongoose";
declare const Dropoff: mongoose.Model<{
    friendlyName: string;
    address: string;
    lat: number;
    lon: number;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    friendlyName: string;
    address: string;
    lat: number;
    lon: number;
}>>;
export default Dropoff;
