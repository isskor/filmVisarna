const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  whoami,
  editUser,
} = require("../controllers/userController");

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.post("/editUser", editUser);
router.get("/whoami", whoami);

module.exports = router;
