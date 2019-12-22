const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product");
let ProductModel = mongoose.model("Product", ProductSchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;
const {NUMBER_OF_PRODUCT_HOT} = require("../utils/constant")
ProductModel.add = async ({
  created_by,
  image,
  price,
  stock_price,
  discount_rate,
  channel,
  url,
  crawl_info
}) => {
  let newProduct = new Product({
    created_by,
    image,
    price,
    stock_price,
    discount_rate,
    channel,
    url,
    crawl_info
  });

  await newProduct.save();
  return newProduct;
};


ProductModel.getByUserId = async (id) => {
 return await ProductModel.find({
   created_by: mongoose.Types.ObjectId(id)
 }).exec();
};
ProductModel.getById = async id => {
  return await ProductModel.findById(id).exec();
};


ProductModel.getAll = async ({perPage,page}) => {

const itemPerPage = perPage || 9; // results per page
 
return await ProductModel.find({})
  .skip(itemPerPage * page - itemPerPage)
  .limit(itemPerPage).sort({
      createdAt: -1
    }).exec();
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
    .limit(NUMBER_OF_PRODUCT_HOT)
    .exec();
};

module.exports = ProductModel;
