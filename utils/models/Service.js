import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    SKU: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    features: {
        type: Object,
        required: true
    },
    duration_type: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },

    platforms: {
        type: Object,
        required: true,
    },
    service_group: {
        type: Object,
        required: true,
    },
    gross_one: {
        type: Number,
        required: true
    },
    gross_two: {
        type: Number,
        required: true
    },
    gross_three: {
        type: Number,
        required: true
    },
    gst: {
        type: Number,
        required: true
    },
    gstper: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    created_by: {
        type: String,
        required: true
    }



});
module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema);
