const link = require("../models/link.module.js");

exports.addlink = (req, res) => {
  console.log(req.body);
  return link.create(req.body)
    .then(function (link) {
      res.status(200).send(link);
    })
    .catch((err) => res.status(400).send(err));
};

exports.deletelink = async (req, res) => {
  try {
    await link.findByIdAndDelete(req.params.id);
    res.status(200).send("link has been deleted...");
  } catch (err) {
    res.status(500).json({ message: "something wrong" });
  }
};

exports.patchlink = (req, res) => {
  link
    .findByIdAndUpdate(
      req.params.id,
      {
        active: req.body.active,
        url: req.body.url,
        label: req.body.label,
        image: req.body.image,
      },
      {
        new: true,
      }
    )
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => res.status(400).send(err));
};

exports.getAlllinks = (req, res) => {
  link
    .find({}).populate("userId").populate('sectionId')
    .then(function (link) {
      res.send(link);
    })
    .catch((err) => {
      res.status(402).send({ message: "something wrong" });
    });
};

exports.getByUserId = (req, res) => {
  console.log(req.params.id);
  //   link.find({ownerId: req.body.ownerId}).populate('ownerId').exec((err, links) => {,(err, link) => {
  link
    .find({ userId: req.params.id })
    .populate("userId").populate('sectionId')
    .then(function (link) {
      res.send(link);
    })
    .catch((err) => {
      res.status(402).send({ message: "something wrong" });
    });
};
