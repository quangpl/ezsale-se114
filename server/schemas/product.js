const mongoose = require("mongoose");

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
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock_price: {
      type: Number,
      required: true
    },
    discount_rate: {
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
      type: Object,
    },
    history: {
      type: new Schema({
        updated_at: {
          type: String
        },
        price: {
          type: Number
        }
      })
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = ProductSchema;
