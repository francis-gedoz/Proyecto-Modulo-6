const mongoose = require('mongoose');

const guitarSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;