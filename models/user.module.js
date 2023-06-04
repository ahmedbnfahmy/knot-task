
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    // email: { type: String, required: true, unique: true },
    // id:{ type: int, required: true },
    fullName: { type: String,maxlength: 50, required: true },
    userName: { type: String,maxlength: 50, unique: true, required: true },
    primaryEmail: { type: String,maxlength: 50, required: true },
    primaryEmailEnabled: { type: Boolean, default: true, required: true },
    bio: { type: String },
    primaryPhone: { type: String, maxlength: 50,},
    primaryPhoneEnabled: { type: Boolean, default: true, required: true },
    // primaryPhoneEnabled: { type: String,maxlength: 50, default: true, required: true },
    password: { type: String },
    userType: {
        type: String,
        enum: ['INDIVIDUAL', 'BUSINESS', 'ADMIN', 'CUSTOMER_SERVICE'],
        default: 'INDIVIDUAL',
        required: true,
    },
    phones: { type: mongoose.Schema.Types.Mixed},
    emails: { type: mongoose.Schema.Types.Mixed},
    fcmTokens: { type: mongoose.Schema.Types.Mixed},
 
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);