var express = require('express');
var router = express.Router();
const UserModel = require("../models/user")

/* GET users listing. */
router.post('/register', async function(req, res, next) {
  const user = await UserModel.register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  res.json({
    error: false,
    payload: user
  });
});

router.post("/login", async function(req, res, next) {
  const user = await UserModel.login({
    email: req.body.email,
     password : req.body.password
  });
  delete user.password;
  if(user){
    res.json({
      error: false,
      payload: user
    })
  }
  else {
    res.json({
      error: true,
      messsage: "Authentication failed"
    });
  }
});


router.post("/password", async function(req, res, next) {
    await UserModel.updatePassword({
    email: req.body.email,
    password: req.body.password
  });

  res.json({
    error: false,
    messsage:"Update password successfully"
  })
});

module.exports = router;
