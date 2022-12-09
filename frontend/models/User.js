import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: false
    },
    resetToken: { type: String },
    update: { type: String },
    validEmail: { type:Boolean, default: false },
    emailToken: { type: String },
    addressOne: {
        type: String,
    },
    addressTwo: {
        type: String
    },
    city: {
        type: String,
    },
    pincode: {
        type: Number
    },
    role:{
        type : String,
        default: 'user',
        required: true
    }



});
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
