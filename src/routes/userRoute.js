const express = require('express');
const {
  createUser,
  login,
  allUsers,
  deleteUser,
  updateUser,
} = require("../controller/userController");

const router = express.Router();

router.post('/create',createUser);
router.post('/login',login);
router.get("/allUsers", allUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;