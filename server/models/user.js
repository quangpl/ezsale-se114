const mongoose = require("mongoose");
const UserSchema = require("../schemas/user");
let UserModel = mongoose.model("User", UserSchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;

var randomstring = require("randomstring");

UserModel.register = async ({
  name,
  email,
  password,
}) => {
  let newUser = new UserModel({
    name,
    email,
    password: bcrypt.hashSync(password, DEFAULT_SALT_ROUND)
  });

  await newUser.save();
  return newUser;
};

UserModel.isRegister = async (email) => {
  const user = await UserModel.findOne({
    email
  }).exec();
  return user ? true : false;
};

UserModel.login = async ({email, password }) => {
  const user = await UserModel.findOne({
      email
  }).exec();
  if(user){
        if(bcrypt.compareSync(password,user.password)){
            return user;
        }
        else {
            return false;
        }
  }
  else {
      return false;
  }
};


UserModel.updatePassword = async ({ email, password }) => {
  return await UserModel.updateOne(
    {
      email
    },
    {
      password: bcrypt.hashSync(password),
      token: randomstring.generate(20)
    }
  ).exec();
};


UserModel.getByToken = async (token) => {
  return await UserModel.findOne({
    token
  }).exec();
};


module.exports = UserModel;
