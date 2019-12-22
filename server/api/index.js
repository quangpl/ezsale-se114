var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/users', require("./user"));
router.use("/products", require("./product"));


module.exports = router;
