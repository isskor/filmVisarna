const User = require('../models/User');
const Encrypt = require('../Encrypt');

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ success: 'logout' });
    }
  });
};

exports.whoami = (req, res) => {
  if (req.session.user) {
    console.log('WHOAMI**************', req.session.user);
    res.json(req.session.user);
  } else {
    res.json({ error: 'error' });
  }
};

//Logic to create a user
exports.createUser = async (req, res) => {
  req.body.password = Encrypt.encrypt(req.body.password);

  let userExist = await User.find({ email: req.body.email }).exec();
  console.log('1');
  //If user exist,
  if (userExist) {
    console.log('2');
    return res.json({ error: 'User already exists' });
  }
  console.log('3');
  let user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  console.log('New user added to database', user);
  res.json({ success: true });
};

//Logic to edit a user
exports.editUser = async (req, res) => {
  req.body.password = Encrypt.encrypt(req.body.password);
  console.log(`body`, req.body);
  console.log('sesh =======> ', req.session);
  let updatedUser = await User.findOneAndUpdate(
    { _id: req.session.user._id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    },
    { new: true }
  ).exec();

  console.log('updt =====>', updatedUser);
  updatedUser.password = null;
  req.session.user = updatedUser;
  console.log('new sesh =====>', req.session.user);
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
