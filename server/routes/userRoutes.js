const express = require('express');
const router = express.Router();

const {
  createUser,
  loginUser,
  whoami,
} = require('../controllers/userController');

router.post('/createUser', createUser);
router.post('/loginUser', loginUser);
router.get('/whoami', whoami);

module.exports = router;
