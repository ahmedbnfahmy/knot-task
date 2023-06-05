
const mongoose = require('mongoose');
const link = require("../models/link.module.js");
const linkSectionSchema = new mongoose.Schema({


    // id:{ type: int, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        maxlength: 50,
    },
    
    label: { type: String, required: true },
    // active: { type: Number,maxlength: 50, required: true },
    active: { type: Boolean, default: true, required: true },
    
}, {
    timestamps: true,
});
// // , { document: false, query: true }

// linkSectionSchema.pre('remove',
//    async function(next) {
//        console.log(inside);
//     const sec =this
//     await link.deleteMany({ "sectionId": sec._id });
//     next()
//    })
module.exports = mongoose.model('LinkSection', linkSectionSchema);