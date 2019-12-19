const mongoose = require("mongoose");
const UserSchema = require("../schemas/user");
let UserModel = mongoose.model("User", UserSchema);
let bcrypt = require("bcrypt");
const DEFAULT_SALT_ROUND = 6;


UserModel.register = async ({
  name,
  email,
  password,
}) => {
  let newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password, DEFAULT_SALT_ROUND),
  });

  await newUser.save();
  return newUser;
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

module.exports = UserModel;
