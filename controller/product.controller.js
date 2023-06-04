const product = require("../controller/product.controller.js");
const productModel=require('../models/product.module.js')
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const validator = require('validator');
// const userModel=require('../models/user.module.js')


exports.addProduct = (reqBody) => { 
    return productModel.create(reqBody);
  }
  


  exports.getById =(req, res) => {
    product.findById(req.params.id)
    .then(function (product) {
    console.log("product founded")

        res.status(200).send(product);
    })
    .catch(err=>res.status(400).send([err,{message:"something wrong"}]))  
};

exports.getByOwnerId =(req, res) => {
//   product.find({ownerId: req.body.ownerId}).populate('ownerId').exec((err, products) => {,(err, product) => {
  product.find({ownerId: req.body.ownerId},(err, product) => {
    if (err) { res.status(404).send(err) };
    {
        res.status(200).send(product);
        console.log("product founded by owner id")
    }
})
  
};

exports.getAllProducts = (req, res) => {
  product.find({}).then(function(product) {
            res.send(product);
        })
        .catch(err => {
            res.status(402).send({message:"something wrong"})
        })
}


exports.deleteProduct = async (req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).send("product has been deleted...");
    } catch (err) {
        res.status(500).json({message:"something wrong"});
    }
};

exports.patchProduct = (req, res) => {
  product.findByIdAndUpdate(req.params.id, {
  active: req.body.active,
  ownerId: req.body.ownerId || null,
      }, {
          new: true
      }).then(data=>{
          res.status(200).send(data)
      })
      .catch(err=>res.status(400).send(err))};


exports.updateProduct = (req, res) => {
  product.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {
                new: true
            })
            .then(sendData => {
                res.status(200).send(sendData)
            })
            .catch(err => {
                res.status(402).send({message:"something wrong"})
            })      
  
}
