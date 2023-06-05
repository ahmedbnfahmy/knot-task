const product=require('../models/product.module.js')
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const validator = require('validator');
// const userModel=require('../models/user.module.js')


  exports.addProduct = (req, res) => {
    console.log(req.body);
      return product.create(req.body).then(function (product) {
        res.status(200).send(product);
    })
    .catch(err => res.status(400).send(err))
  };
    

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
//   active: req.body.active,
  ownerId: req.body.ownerId || null,
      }, {
          new: true
      }).then(data=>{
        console.log(data);
          res.status(200).send(data)
      })
      .catch(err=>res.status(400).send(err))};


exports.updateProduct = (req, res) => {
    console.log(req.body);
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
exports.getById =(req, res) => {
    product.findById(req.params.id)
    .then(function (product) {
    console.log("product founded")

        res.status(200).send(product);
    })
    .catch(err=>res.status(400).send([err,{message:"something wrong"}]))  
};

exports.getByOwnerId =(req, res) => {
    console.log(req.params.id);
//   product.find({ownerId: req.body.ownerId}).populate('ownerId').exec((err, products) => {,(err, product) => {
  product.find({ownerId: req.params.id}).populate('ownerId').then(function(product) {
    res.send(product);
})
.catch(err => {
    res.status(402).send({message:"something wrong"})
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