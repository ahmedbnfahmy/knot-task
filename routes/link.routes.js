const users = require("../controller/user.controller.js");
// const verify = require("../controller/verifyTokenapi.controller.js");
const router = require("express").Router();
const userModel=require('../models/user.module.js')
//with verfiy
//UPDATE
// router.put("/:id", verify.verifyToken, users.updateUser);
// router.get("/checkEmail/:email",users.checkEmail);
// // DELETE
// router.delete("/:id", verify.verifyTokenAndAuthorization, users.deleteUser); 
// //GET USER
// router.get("/:id", verify.verifyTokenAndAuthorization,users.getUser);
// //GET ALL USERS
// router.get("/", verify.verifyTokenAndAdmin,users.getAllUsers);
// router.get("/check/forget/:email",users.checkForgetPass);
// router.put("/changePass/:email", users.ChangePass);
// router.post("/AddNew", verify.verifyTokenAndAdmin,users.AddUserForAdmin);
// router.post("/pagination", verify.verifyTokenAndAdmin,users.getAllUserpagination);

router.post("/", async (req, res, next) => {
    var reqBody = req.body; 
    console.log(reqBody);
    //request body
    //try catch to handle the error
    try {
      var savedUser = await users.createUser(reqBody);
      res.status(201).json(savedUser); // to print it as json file
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  });

// //without verfiy
// router.put("/:id", users.updateUser);
// // DELETE
// router.delete("/:id", users.deleteUser); 
// //GET USER
// router.get("/:id",users.getUser);
// //GET ALL USERS
// router.get("/",users.getAllUsers);

// router.post("/addNew",users.AddUserForAdmin);
// router.post("/createUser",users.AddUserForAdmin);



module.exports = router;