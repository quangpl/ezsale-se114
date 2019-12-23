const mongoose = require("mongoose");
const {PERIOD_TIME_CHECK} = require("../utils/constant")
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    created_by: {
      type: Schema.ObjectId,
      required: true
    },
    image: {
      type: String
    },
    discount_rate: {
      type: Number,
      default: 0
    },
    stock_price: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    channel: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    crawl_info: {
      type: Object
    },
    nextTimeCheck: {
      type: Date,
      default: Date.now() + PERIOD_TIME_CHECK
    },
    followers: {
      type: [mongoose.Types.ObjectId]
    },
    history: {
      type: [
        new Schema({
          updated_at: {
            type: String
          },
          price: {
            type: Number
          }
        })
      ]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = ProductSchema;
