const userBooking = require("../Models/userBooking");

const createUserBooking = async (req, res) => {
  const NewCreate = userBooking(req.body);
  const saveCreate = await NewCreate.save();
  if (NewCreate) {
    res.send(saveCreate);
  }
};

const ReadUser = async (req, res) => {
  const NewReaad = await userBooking.find();
  if (NewReaad) {
    res.send(NewReaad);
  }
};

module.exports = { createUserBooking, ReadUser };
