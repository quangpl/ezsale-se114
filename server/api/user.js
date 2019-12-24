var express = require('express');
var router = express.Router();
const UserModel = require("../models/user")

/* GET users listing. */
router.post('/register', async function(req, res, next) {
  if (await UserModel.isRegister(req.body.email)){
    res.json({
      error: true,
      messsage:"Duplicate"
    })
    return ;
  }
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

router.get("/auth", async function(req, res, next) {
  const user = await UserModel.getByToken(req.query.token);
user.password = "";

  res.json({
    error: user ? false : true,
    payload: user
  });
});

router.get("/following", async function(req, res, next) {
  const products = await UserModel.getFollowing(req.query.token);

  res.json({
    error: products ? false : true,
    payload: products
  });
});

router.post("/push-token", async function(req, res, next) {
   const result = await UserModel.updateTokenNotify({
     token: req.body.token,
     tokenNotify: req.body.tokenNotify
   });
if(!result){
  res.status(200).json({
    error: true,
    message:"Token of user is invalid"
  });
}
else{
  res.status(200).json({
    error: false
  });
}
  
});



module.exports = router;
