import mongoose from 'mongoose';

const serviceGroupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    }



});
module.exports = mongoose.models.ServiceGroup || mongoose.model('ServiceGroup', serviceGroupSchema);
