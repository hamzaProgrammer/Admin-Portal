const express = require('express');
const router = express.Router();
const multer = require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/products')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})
const upload = multer({
        storage: storage,
});

const {
     addNewProduct,
     updateProduct,
     DeleteProduct,
     getAllProducts,
     getSingleProd
} = require('../controllers/ProductController')


// Adding new Category
router.post('/api/products/addNew',  upload.single("prodImage") , addNewProduct)


// deleting single product
router.post('/api/products/deleteProduct', DeleteProduct)

// get single categories
router.get('/api/products/getSingleProduct/:data', getSingleProd)

//  get all Products
router.get('/api/products/getAllProducts', getAllProducts)

//  Updating Product
router.put('/api/products/updateProduct',upload.single("prodImage") , updateProduct)

module.exports = router;