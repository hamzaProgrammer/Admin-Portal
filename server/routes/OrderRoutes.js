const express = require('express');
const router = express.Router();
const {
     getAllOrders,
     getSingleOrder,
     getOrdersByStatus,
    updateOrderStatus,
} = require('../controllers/OrdersController')


// Adding new Category
//router.post('/api/orders/addNew',  upload.single("prodImage") , addNewProduct)


// single product
router.get('/api/orders/singleOrder', getSingleOrder)

// get orders by status
router.get('/api/orders/getOrdersByStatus', getOrdersByStatus)

//  get all orders
router.get('/api/orders/getAllorders', getAllOrders)

//  Updating Order
router.put('/api/orders/updateOrderStatus', updateOrderStatus)

module.exports = router;