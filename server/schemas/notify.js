const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotifySchema = new Schema(
  {
    receiver: {
      type: Schema.ObjectId,
      required: true
    },
    type: {
      type: String,      //down,up,system
      enum:["down","up","system"]
    },
    price_change: {
      type: String,
    },
    detail: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = NotifySchema;
