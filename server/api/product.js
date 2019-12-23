var express = require("express");
var router = express.Router();
const ProductModel = require("../models/product")
const UserModel = require("../models/user");

const Tiki = require("../services/Tiki")
/* GET users listing. */
router.get("/", async function(req, res, next) {
 const products = await ProductModel.getAll({ perPage: req.query.perPage, page:req.query.page });

 res.json({
   error: false,
   payload : {
     products
   }
 })
});

router.get("/hot", async function(req, res, next) {
  const products = await ProductModel.getHotestProduct();

  res.json({
    error: false,
    payload: {
      products
    }
  });
});


router.get("/new", async function(req, res, next) {
  const products = await ProductModel.getNewestProduct({
    page:req.query.page,
    perPage: req.query.perPage
  });

  res.json({
    error: false,
    payload: {
      products
    }
  });
});

router.post("/add", async function(req, res, next) {

  const user = await UserModel.getByToken(req.body.token);
if(!user){
  res.jsom({
    error:true,
    message: "Your request is not valid"
  })
  return;
}

 const tiki = new Tiki(req.body.url);
 tiki.getCrawlInfo();

 const dataTiki = await tiki.getData();

 const product = await ProductModel.add({
   created_by: user._id,
   image: dataTiki.image,
   price: dataTiki.price,
   discount_rate: dataTiki.discount_rate,
   channel: dataTiki.channel,
   url: this.url,
   crawl_info: dataTiki.crawl_info,
   stock_price: dataTiki.list_price
 });

 res.json({
   error: false,
   payload : {
     product
   }
 })
});

router.get("/:productId", async function(req, res, next) {
  const product = await ProductModel.getById(req.params.productId);

  res.json({
    error: false,
    payload: {
      product
    }
  });
});

router.get("/user/:userId", async function(req, res, next) {
  const products = await ProductModel.getByUserId(req.params.userId);

  res.json({
    error: false,
    payload: {
      products
    }
  });
});


module.exports = router;
