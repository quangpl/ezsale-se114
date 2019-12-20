var express = require("express");
var router = express.Router();
const ProductModel = require("../models/product")
/* GET users listing. */
router.get("/", function(req, res, next) {
 const products = await ProductModel.getAll({ perPage: req.query.perPage, page:req.query.page });

 res.json({
   error: false,
   payload : {
     products
   }
 })
});

router.post("/add", function(req, res, next) {
 const product = await ProductModel.add({
  created_by: req.body.created_by,
  image:req.body.image,
  price:req.body.price,
  stock_price:req.body.stock_price,
  discount_rate:req.body.discount_rate,
  channel:req.body.channel,
  url:req.body.url,
  crawl_info:req.body.crawl_info
});

 res.json({
   error: false,
   payload : {
     product
   }
 })
});

router.get("/:productId", function(req, res, next) {
  const product = await ProductModel.getById(req.params.productId);

  res.json({
    error: false,
    payload: {
      product
    }
  });
});

router.get("/user/:userId", function(req, res, next) {
  const products = await ProductModel.getByUserId(req.params.userId);

  res.json({
    error: false,
    payload: {
      products
    }
  });
});


module.exports = router;
