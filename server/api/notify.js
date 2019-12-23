var express = require("express");
var router = express.Router();
const NotifyModel = require("../models/notify");

/* GET users listing. */
router.get("/:userId", async function(req, res, next) {
  const notify = await NotifyModel.getByUserId(req.params.userId);

  res.json({
    error: false,
    payload: {
      notify
    }
  });
});

module.exports = router;
