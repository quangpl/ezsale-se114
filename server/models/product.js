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
  crawl_info,
  stock_price,
  title
}) => {
  if(await ProductModel.hasExist(crawl_info.id)){
    console.log("trung")
    return false;
  }
  let newProduct = new ProductModel({
    created_by,
    image,
    discount_rate,
    channel,
    url,
    price,
    crawl_info,
    stock_price,
    title,
    crawl_id:crawl_info.id,
    followers:[
      mongoose.Types.ObjectId(created_by)
    ],
    history: [
      {
        price,
        updated_at: Date.now()
      }
    ]
  });

  await newProduct.save();
  return newProduct;
};


ProductModel.hasExist = async crawlId => {
   const product = await ProductModel.findOne({
    crawl_id:crawlId
  }).exec();
  return product? true :false;
};


ProductModel.getByUserId = async (id) => {
 return await ProductModel.find({
   created_by: mongoose.Types.ObjectId(id)
 }).exec();
};

ProductModel.updateHistory = async ({
  _id,
  updated_at,
  price,
  discount_rate,
  stock_price
}) => {
  return await ProductModel.updateOne(
    {
      _id: mongoose.Types.ObjectId(_id)
    },
    {
      $push: {
        history: {
          updated_at,
          price
        }
      },
      nextTimeCheck: updated_at + PERIOD_TIME_CHECK,
      price,
      discount_rate,
      stock_price
    }
  ).exec();
};
ProductModel.getById = async id => {
  return await ProductModel.findById(id).exec();
};

ProductModel.getProductToCrawl = async () => {
  return await ProductModel.findOne({
    nextTimeCheck : Date.now()
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
console.log(perPage);
  if (page < 0 || perPage === 0) {
    page=1;
    perPage=10;
  }


const skip = perPage * (page - 1);

return await ProductModel.find({})
  .sort({
    createdAt: -1
  })
  .skip(skip)
  .limit(12)
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

ProductModel.addFollower = async ({
  productId,userId
}) => {
 await ProductModel.updateOne(
   {
     _id: mongoose.Types.ObjectId(productId)
   },
   {
     $push: {
       followers: mongoose.Types.ObjectId(userId)
     }
   }
 );
};

module.exports = ProductModel;
