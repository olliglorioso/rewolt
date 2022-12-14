"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dropoffSchema = new mongoose_1.default.Schema({
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
const Dropoff = mongoose_1.default.model("Dropoff", dropoffSchema);
exports.default = Dropoff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcG9mZi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy9kcm9wb2ZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdDO0FBR2hDLE1BQU0sYUFBYSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEMsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRXpELGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG5jb25zdCBkcm9wb2ZmU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGZyaWVuZGx5TmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgYWRkcmVzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgbGF0OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBsb246IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG59KTtcblxuY29uc3QgRHJvcG9mZiA9IG1vbmdvb3NlLm1vZGVsKFwiRHJvcG9mZlwiLCBkcm9wb2ZmU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcG9mZjsiXX0=