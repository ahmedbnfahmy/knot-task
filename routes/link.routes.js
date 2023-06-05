const link = require("../controller/link.controller.js");
const router = require("express").Router();


router.post("/createLink",  link.addlink);// working // sectionId //647d13e7f268ab6f1b5bc43a
router.patch("/patchLink/:id",  link.patchlink);// working
router.delete("/:id",  link.deletelink); // working
router.get("/",  link.getAlllinks);// working with users and sections

router.get("/userId/:id", link.getByUserId); //647a841cd89a9531cb055cc3 // working
// router.get("/:id",link.getById); // working
// router.put("/updatePrd/:id",  link.updatelink);// working


module.exports = router;