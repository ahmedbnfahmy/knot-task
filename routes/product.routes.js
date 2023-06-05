const product = require("../controller/product.controller.js");
const router = require("express").Router();





router.post("/createPrd",  product.addProduct);// working
router.get("/",  product.getAllProducts);// working

router.get("/:id",product.getById); // working
router.get("/ownerId/:id", product.getByOwnerId); //647a841cd89a9531cb055cc3 // working
router.put("/updatePrd/:id",  product.updateProduct);// working
router.patch("/patchPrd/:id",  product.patchProduct);// working
router.delete("/:id",  product.deleteProduct); // working


module.exports = router;