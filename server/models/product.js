const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product");
let ProductModel = mongoose.model("Product", ProductSchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;

ProductModel.add = async ({
  created_by,
  image,
  price,
  stock_price,
  discount_rate,
  channel,
  url
}) => {
  let newProduct = new Product({
    created_by,
    image,
    price,
    stock_price,
    discount_rate,
    channel,
    url
  });

  await newProduct.save();
  return newProduct;
};


ProductModel.getByUserId = async (id) => {
 return await ProductModel.find({
   created_by: mongoose.Types.ObjectId(id)
 }).exec();
};


ProductModel.getAll = async () => {
  return await ProductModel.find({}).exec();
};


ProductModel.getNewestProduct = async () => {
  return await ProductModel.find({})
    .sort({
      createdAt: -1
    })
    .exec();
};

ProductModel.getHotestProduct = async () => {
  return await ProductModel.find({})
    .sort({
      discount_rate: -1
    })
    .exec();
};

module.exports = ProductModel;
