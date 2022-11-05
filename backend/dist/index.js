"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose_1 = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const constants_1 = require("./constants");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static("../build"));
mongoose_1.default.connect(constants_1.DB_URL || "");
app.use(express.json());
app.use(cors());
require("./models/user");
require("./models/order");
require("./models/dropoff");
const routers = [
    // import routers here
    require("./routes/public").default,
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyx1Q0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUU3QiwyQ0FBcUM7QUFZckMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtBQUNuQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRWYsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRTVCLE1BQU0sT0FBTyxHQUFHO0lBQ2Qsc0JBQXNCO0lBQ3RCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU87Q0FDbkMsQ0FBQTtBQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFnQjtBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXBELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBR3pDLGlCQUFpQjtBQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gXCIuL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBEQl9VUkwgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgbmFtZXNwYWNlIEV4cHJlc3Mge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdCB7XG4gICAgICB1c2VyPzogSVVzZXI7XG4gICAgfVxuICB9XG59XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwMDtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCIuLi9idWlsZFwiKSlcbm1vbmdvb3NlLmNvbm5lY3QoREJfVVJMIHx8IFwiXCIpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoY29ycygpKVxuXG5yZXF1aXJlKFwiLi9tb2RlbHMvdXNlclwiKTtcbnJlcXVpcmUoXCIuL21vZGVscy9vcmRlclwiKTtcbnJlcXVpcmUoXCIuL21vZGVscy9kcm9wb2ZmXCIpO1xuXG5jb25zdCByb3V0ZXJzID0gW1xuICAvLyBpbXBvcnQgcm91dGVycyBoZXJlXG4gIHJlcXVpcmUoXCIuL3JvdXRlcy9wdWJsaWNcIikuZGVmYXVsdCxcbl1cblxucm91dGVycy5mb3JFYWNoKHJvdXRlciA9PiB7XG4gIGFwcC51c2Uocm91dGVyKTtcbn0pO1xuXG4vLyByZXF1aXJlIHRva2VuXG5hcHAudXNlKHJlcXVpcmUoXCIuL21pZGRsZXdhcmVzL2F1dGhcIikucmVxdWlyZUxvZ2luKTtcblxuYXBwLnVzZShyZXF1aXJlKFwiLi9yb3V0ZXMvYXBpXCIpLmRlZmF1bHQpO1xuXG5cbi8vIHJ1biB0aGUgc2VydmVyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG59KTtcblxuXG5cbiJdfQ==