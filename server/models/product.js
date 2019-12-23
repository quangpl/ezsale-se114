const mongoose = require("mongoose");
const ProductSchema = require("../schemas/product");
let ProductModel = mongoose.model("Product", ProductSchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;
const {NUMBER_OF_PRODUCT_HOT,PERIOD_TIME_CHECK} = require("../utils/constant")
ProductModel.add = async ({
  created_by,
  image,
  price,
  discount_rate,
  channel,
  url,
  crawl_info
}) => {
  let newProduct = new Product({
    created_by,
    image,
    price,
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

ProductModel.updateHistory = async ({ _id, updated_at ,price}) => {
  return await ProductModel.updateOne(
    {
      _id: mongoose.Types.ObjectId(_id)
    },
    {
      $push: {
        history: {
          updated_at,
          price
        },
        nextTimeCheck: Date.now() + PERIOD_TIME_CHECK
      }
    }
  ).exec();
};
ProductModel.getById = async id => {
  return await ProductModel.findById(id).exec();
};

ProductModel.getProductToCrawl = async () => {
  return await ProductModel.findOne({
    nextTimeCheck : Data.now()
  }).exec();
};


ProductModel.getAll = async ({perPage,page}) => {

const itemPerPage = perPage || 9; // results per page
 
return await ProductModel.find({})
  .skip(itemPerPage * page - itemPerPage)
  .limit(itemPerPage).sort({
      createdAt: -1
    }).exec();
                                  };


ProductModel.getNewestProduct = async ({page,perPage}) => {

  if (page < 0 || perPage === 0) {
    page=1;
    perPage=10;
  }

  let query={};
  query.skip = perPage * (page - 1);
  query.limit = perPage;
  
  return await ProductModel.find({}).skip(query.skip)
    .sort({
      createdAt: -1
    }).limit(query.limit)
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
