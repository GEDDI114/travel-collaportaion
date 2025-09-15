const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();
router.post("/user", userController.createUserBooking);
router.get("/readuser", userController.ReadUser);
module.exports = router;
