const User = require('../models/User');
const Encrypt = require('../Encrypt');

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
    } else {
      res.send({ success: 'logout' });
    }
  });
};

exports.whoami = (req, res) => {
  // checks if we have user in session
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.json({ error: 'error' });
  }
};

//Logic to create a user
exports.createUser = async (req, res) => {
  req.body.password = Encrypt.encrypt(req.body.password);

  let userExist = await User.find({ email: req.body.email }).exec();
  //If user exist,
  if (userExist.length > 0) {
    return res.json({ userExist: 'User already exists' });
  }
  let user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  res.json({ success: true, msg: 'new user created:', user });
};

//Logic to edit a user
exports.editUser = async (req, res) => {
  req.body.password = Encrypt.encrypt(req.body.password);
  let updatedUser = await User.findOneAndUpdate(
    { _id: req.session.user._id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    },
    { new: true }
  ).exec();

  updatedUser.password = null;
  req.session.user = updatedUser;
  req.session.save((err) => {
    if (err) return console.log(err);

    res.json({ success: true, user: updatedUser });
  });
};

//Logic to login a user
exports.loginUser = async (req, res) => {
  let email = req.body.email;
  let password = Encrypt.encrypt(req.body.password);

  let user = await User.findOne({ email, password }).exec();

  //If database could not find user send back error
  if (!user) {
    return res.status(404).json({ error: 'Wrong credentials' });
  }
  user.password = null;
  req.session.user = user;

  req.session.save((err) => {
    if (err) return console.log(err);

    res.send(req.session.user);
  });
};
