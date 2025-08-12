const express = require('express');
const { createUser, login, allUsers } = require("../controller/userController");

const router = express.Router();

router.post('/create',createUser);
router.post('/login',login);
router.get("/allUsers", allUsers);

module.exports = router;