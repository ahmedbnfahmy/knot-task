const linkSection = require("../controller/linkSection.controller.js");
const router = require("express").Router();



router.post("/createLinkSection",  linkSection.addlinkSection); // working
router.patch("/patchLinkSection/:id",  linkSection.patchlinkSection); // working
router.delete("/:id", linkSection.deletelinkSection); // working
router.delete("/deleteCascade/:id", linkSection.deleteCascadelinkSection); // working
router.get("/",  linkSection.getAlllinkSection); // working
router.get("/userId/:id", linkSection.getByUserId); //647a841cd89a9531cb055cc3 // working


// router.get("/:id",linkSection.getById); // working
// router.put("/updatePrd/:id",  linkSection.updatelinkSection);// working


module.exports = router;