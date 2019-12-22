const mongoose = require("mongoose");
const NotifySchema = require("../schemas/notify");
let NotifyModel = mongoose.model("Notify", NotifySchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;

NotifyModel.add = async ({ receiver, type, price_change, detail }) => {
  let newNotify = new Notify({ receiver, type, price_change, detail });

  await newNotify.save();
  return newNotify;
};

NotifyModel.getByUserId = async (userId) => {
 return await NotifyModel.find({
   receiver: mongoose.Types.ObjectId(userId)
 });
};



module.exports = NotifyModel;
