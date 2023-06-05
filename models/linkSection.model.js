
const mongoose = require('mongoose');
const links = require("./link.model.js");


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
// , { document: false, query: true }
// linkSectionSchema.pre('remove', async function(next){
//         const linkSection =this;
//         await links
//         .remove({sectionId: linkSection._id }, next);
        // .deleteMany({ sectionId: linkSection._id })
//   })
// linkSectionSchema.pre('Remove',async function(next) {
//     //    console.log("inside");
//     // await link.deleteMany({ _id : "647d1c193358bd9d82c5ff4e"});
//     next("inside")
//    })
module.exports = mongoose.model('LinkSection', linkSectionSchema);