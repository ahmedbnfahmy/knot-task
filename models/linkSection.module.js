
const mongoose = require('mongoose');

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

module.exports = mongoose.model('LinkSection', linkSectionSchema);