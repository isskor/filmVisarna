const User = require("../models/User");
const Encrypt = require("../Encrypt");

exports.createUser = async (req, res) => {
  req.body.password = Encrypt.encrypt(req.body.password);

  let user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  console.log("New user added to database", user);
  res.send("Added successfully!");
};
