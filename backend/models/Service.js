import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    platforms: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    gross: {
        type: Number,
        required: true
    },
    gst: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }



});
module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema);
