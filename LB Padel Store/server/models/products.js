const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    }
    //,
    // Material: {
    //     type: String,
    //     required: false
    // },
    // ColorVariations: [
    //     {
    //         Color: {
    //             type: String,
    //             required: true
    //         },
    //         Stock: {
    //             type: Number,
    //             required: true
    //         }
    //     }
    // ]
});

module.exports = mongoose.model("Products", ProductSchema);


