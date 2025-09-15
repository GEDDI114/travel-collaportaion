const mango = require("mongoose");

const UserSchema = mango.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },

  phone: { type: Number, required: true },

  number_of_tiket: { type: Number, required: true },
});

module.exports = mango.model("userBooking", UserSchema);
