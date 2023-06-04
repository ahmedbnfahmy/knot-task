
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    ownerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    active: { type: Boolean, default: false, required: true },
    productType: {
        type: String,
        enum: ['CARD', 'KEYCHAIN', 'STICKER'],
        default: 'CARD',
        required: true,
      },
 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);