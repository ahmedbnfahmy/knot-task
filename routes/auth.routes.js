const express = require('express');
const router = express.Router();
const users = require("../controller/auth.controller.js");
const verfiy =require("../controller/verifyTokenapi.controller.js")
const path = require('path');
// const { upload } = require('../helpers/filehelper');

//SIGN UP
router.post('/signup', users.signUp);

//LOGIN
router.post('/login', users.login);
router.get('/logout', users.logout);

// router.post('/admin',users.adminLogin);
//SELLER
// router.post('/seller/signup' ,express.static(path.join(__dirname, 'uploads')), upload.single('files'), users.sellerSignUp);


module.exports = router;