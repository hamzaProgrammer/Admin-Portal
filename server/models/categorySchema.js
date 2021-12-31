const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        cateImage: {
            type: String,
        },
        
    },
    {
        timestamps: true
    }
);


const Category = mongoose.model('Categories', categorySchema);

module.exports = Category