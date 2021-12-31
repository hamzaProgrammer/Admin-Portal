const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type : String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brandName: {
            type: String,
            //required: true,
        },
        productImg:{
           type: String
        }
    },
    {
        timestamps: true
    }
);


const Products = mongoose.model('Products', ProductSchema);

module.exports = Products