const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  whoami,
  editUser,
  logout,
} = require("../controllers/userController");

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.put("/editUser", editUser);
router.get("/whoami", whoami);
router.get("/logout", logout);

module.exports = router;
