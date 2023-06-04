const product = require("../controller/product.controller.js");
const router = require("express").Router();





router.post("/",  product.addProduct);//
router.get("/",  product.getAllProducts);//

router.get("/product/:id",  product.getById); //
router.get("/product/:ownerId", product.getByOwnerId); //
router.put("/:id",  product.updateProduct);//
router.patch("/:id",  product.patchProduct);//
router.delete("/:id",  product.deleteProduct); //


module.exports = router;