const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/userController");

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);

module.exports = router;
