const mongoose = require("mongoose");
var randomstring = require("randomstring");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type:String,
      required: true
    },
    point: {
      type: Number,
      default:0
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    token: {
      type: Number,
      required: true,
      default:randomstring.generate(20),
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = UserSchema;
