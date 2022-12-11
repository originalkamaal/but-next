import mongoose from 'mongoose';

const serviceGroupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    }



});
module.exports = mongoose.models.ServiceGroup || mongoose.model('ServiceGroup', serviceGroupSchema);
