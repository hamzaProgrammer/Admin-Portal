const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        paymentMethod: {
            type : String,
            required: true,
        },
        status: {
            type : String,
            required: true,
        },
        Items: {
            type: Array,
            //required: true,
        },
    },
    {
        timestamps: true
    }
);


const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders