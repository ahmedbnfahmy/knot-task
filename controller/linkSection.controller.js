
const linkSection=require('../models/linkSection.module.js')
const link = require("../models/link.module.js");



exports.addlinkSection = (req, res) => {
  console.log(req.body);
    return linkSection.create(req.body).then(function (linkSection) {
      res.status(200).send(linkSection);
  })
  .catch(err => res.status(400).send(err))
};


exports.deletelinkSection = async (req, res) => {
  try {
      await linkSection.findByIdAndDelete(req.params.id);
      res.status(200).send("linkSection has been deleted...");
  } catch (err) {
      res.status(500).json({message:"something wrong"});
  }
};
exports.deleteCascadelinkSection = (req, res) => {
  const delId=req.params.id;
  link.findByIdAndDelete(req.params.id).then(async function(delId) {
  await linkSection.findByIdAndDelete(delId);
  res.status(200).send("linkSection cascade has been deleted...");
          })
          .catch(err => {
              res.status(402).send({message:"something wrong"})
          })
  }


// exports.deleteCascadelinkSection = async (req, res) => {
//   try {
//     linkSection.pre( "deleteMany", { document: false, query: true }, 
//     async function (next) { const docs = await this.model.find(this.getFilter()); 
//       const users = docs.map((item) => item._id); 
//        await link.deleteMany({ user: { $in: users } }); next(); } );
//       }
//    catch (err) {
//       res.status(500).json({message:"something wrong"});
//   }
// };

// deleteCascadelinkSection
// exports.deleteCascadelinkSection = async (req, res) => {
//   console.log("cascade");
//   try {
//   linkSection.pre('deleteOne', { document: false, query: true },
//    async function() {
//     const doc = await this.model.findOne(this.getFilter());
//     await link.deleteMany({ sectionId: doc._id });
//     res.status(200).send("cascade has been deleted...");
//   });
// } catch (err) {
//   res.status(500).json({message:"something wrong"});
// }
// };


  // try {
  //   await linkSection.pre('remove', function() {
  //     const link = mongoose.model('link');
  //     link.remove({ sectionId: this._id });
  //     res.status(200).send("linkSection has been deleted...");
  //   });
  //     // await linkSection.findByIdAndDelete(req.params.id);
  //     // res.status(200).send("linkSection has been deleted...");
  // } catch (err) {
  //     res.status(500).json({message:"something wrong"});
  // }
// };

exports.patchlinkSection = (req, res) => {
  linkSection.findByIdAndUpdate(req.params.id, {
    label: req.body.label,
  active: req.body.active,
      }, {
          new: true
      }).then(data=>{
        console.log(data);
          res.status(200).send(data)
      })
      .catch(err=>res.status(400).send(err))};


      exports.getAlllinkSection = (req, res) => {
        linkSection.find({}).then(function(linkSection) {
        // linkSection.find({}).populate('userId').then(function(linkSection) {
                  res.send(linkSection);
              })
              .catch(err => {
                  res.status(402).send({message:"something wrong"})
              })
      }

      exports.getByUserId =(req, res) => {
        console.log(req.params.id);
    //   link.find({ownerId: req.body.ownerId}).populate('ownerId').exec((err, links) => {,(err, link) => {
      linkSection.find({userId: req.params.id}).populate('userId').then(function(linkSection) {
        res.send(linkSection);
    })
    .catch(err => {
        res.status(402).send({message:"something wrong"})
    })
      
    };