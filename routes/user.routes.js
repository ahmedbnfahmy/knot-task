const user = require("../controller/user.controller.js");
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


// //without verfiy
router.post("/createUser",user.createUser);// working 
router.post("/createOwnerPrd/:id",user.createOwnerPrd);// working 
// // DELETE
router.delete("/:id", user.deleteUser); // working
router.put("/updateUser/:id", user.updateUser); // working

// router.put("/:id", user.updateUser);
// //GET USER products
router.get("/userProducts/:id",user.getPrdByUserId); //647a841cd89a9531cb055cc3 //working
// router.get("/productsByUser/:id",user.getPrdByUserId);

// //GET USER linkSection
router.get("/getLinksSectionByUserId/:id",user.getLinksSectionByUserId);
 
// get Link and sections By UserId
router.get("/userLinks/:id",user.getLinksByUserId);//

router.get("/userSections/:id",user.getLinksSectionByUserId);//


router.get("/:id",user.getUser);
// router.get("/userLinkAndSections/:id",user.getUserWithLinkSectionsAndLinks);

//Update USER Links 
router.post("/addLink",user.addLink);
router.put("/updateLink/:id", user.updateLink);
router.delete("/deleteLink/:id", user.deleteLink); //


//Update USER section Links 
router.post("/addSectionLink",user.addSectionLink);
router.put("/updateSectionLink/:id", user.updateSectionLink); //move to different section
router.delete("/deleteSectionLink/:id", user.deleteSectionLink); //delete cascade

router.get("/",user.getAllUsers);

// router.post("/addNew",users.AddUserForAdmin);



module.exports = router;