const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");
const BookingRouter = require("./Routers/BookingRouter");
const RegisterRouter = require("./Routers/RegisterRouter");
const app = express();
app.use(express.json());
app.use(cors());
mongo.connect("mongodb://localhost:27017/TRAVAL_AGENCY_PROJECT").then(() => {
  console.log("Sucess COnnected");
});
app.use(BookingRouter);
app.use(RegisterRouter);
app.use("/iamges", express.static("images"));
app.listen(9007, () => console.log("Server is running with port 9007"));
