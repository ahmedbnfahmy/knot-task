
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({

    // id:{ type: int, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LinkSection'
    },
    active: { type: Boolean, default: true, required: true },
    label: { type: String,maxlength: 50, required: true },
    image: { type: String,maxlength: 50, required: true },
    url: { type: String,maxlength: 50, required: true },
   
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Link', linkSchema);