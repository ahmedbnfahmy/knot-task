const User = require("../models/user.module.js");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const validator = require('validator');
const userModel=require('../models/user.module.js')


exports.createUser = (reqBody) => {
    return userModel.create(reqBody);
  }
  



// // //UPDATE
// exports.updateUser = (req, res) => {
//     if (req.body.password) {
//         let validEmail = validator.isEmail(req.body.email);
//         let validPass = validator.isStrongPassword(req.body.password);
//         let validPhone = validator.isMobilePhone(req.body.phone, ['ar-EG']);
//         // if (validEmail && validPass && validPhone) {
//             if (req.body.email) {
//             req.body.password = bcrypt.hashSync(req.body.password, 10);
//             User.findByIdAndUpdate(req.params.id, {
//                 $set: req.body
//             }, {
//                 new: true
//             })
//                 .then(sendData => {
//                     res.status(200).send(sendData)
//                 })
//                 .catch(err => {
//                     res.status(402).send(err)
//                 })
//         } else {
//             res.status(405).send("your data is not valid");
//         }
//     } else {
//         let validEmail = validator.isEmail(req.body.email);
//         let validPhone = validator.isMobilePhone(req.body.phone, ['ar-EG']);
//         if (validEmail && validPhone) {
//             User.findByIdAndUpdate(req.params.id, {
//                 email: req.body.email,
//                 phone: req.body.phone,
//                 name: req.body.name
//             }, {
//                 new: true
//             })
//                 .then(sendData => {
//                     res.status(200).send(sendData)
//                 })
//                 .catch(err => {
//                     res.status(402).send(err)
//                 })
//         } else {
//             res.status(405).send("your data is not valid2");
//         }
//     }
// }




// exports.checkEmail = (req, res) => {
//     User.findOne({ email: req.params.email }, (err, check) => {
//         if (err) {
//             res.status(405).send({ msg: " error", success: false })
//         }
//         if (check) {
//             res.status(405).send({ msg: "this email is here", success: false })
//         }
//         else {
//             res.status(200).send({ msg: "ok can change email", success: true })
//         }
//     })
// };


// //DELETE
// exports.deleteUser = (req, res) => {
//     User.findByIdAndDelete(req.params.id).then(data => {
//         console.log(data)
//         res.status(200).send(data)
//     }).catch(err => {
//         res.status(400).send(err);
//     })

// };


// //GET USER
// exports.getUser = (req, res) => {
//     User.findById(req.params.id)
//         .then(function (user) {
//             res.status(200).send(user);
//         })
//         .catch(err => res.status(400).send(err))
// };


// //GET ALL USERS
// exports.getAllUsers = (req, res) => {
//     User.find({}).then((users) => {
//         // console.log(users.length)
//         res.send({ success: true, Users: users, NumberOfUsers: users.length })
//         // res.send(users)
//     })
//         .catch(err => res.status(400).send(err))
// };

// const nodemailer = require('nodemailer');

// const message = "Welcome "


// exports.AddUserForAdmin = (req, res, next) => {
//     let validEmail = validator.isEmail(req.body.email);
//     let validPass = validator.isStrongPassword(req.body.password);
//     let validPhone = validator.isMobilePhone(req.body.phone, ['ar-EG']);
//     // if (validEmail && validPass && validPhone) {
//     if (req.body.email) {
//         // console.log(req.body)
//         User.findOne({ email: req.body.email })
//             .then(user => {
//                 if (user){
//                     res.status(404).send('please try again')
//                     console.log(req.body)
//                 }else {
//                     console.log("data")
//                     const user1 = new User({
//                         name: req.body.name,
//                         email: req.body.email,
//                         phone: req.body.phone,
//                         password: bcrypt.hashSync(req.body.password, 10),
//                         isSeller: req.body.isSeller,
//                         isAdmin: req.body.isAdmin
//                     })

//                     user1.save()
//                         .then(data => {
//                             res.status(200).send([data, { message: "welcome  you are regitered successfully" }])
//                         }).catch(err => {
//                             console.log(user1) 
//                             res.status(401).send([err, { message: "the Email in Used " }])
//                         })
//                 }
//             }).catch(err => { res.send(err) })
//     } else {
//         res.status(401).send({ message: "Not valid email or password or phone number please try again.." })
//     }
// }

