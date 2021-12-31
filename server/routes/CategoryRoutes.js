const express = require('express');
const router = express.Router();
const multer = require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/categories')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})
const upload = multer({
        storage: storage,
});

const {
     addNewCategory,
     updateCategory,
     getAllCategories,
     getSingleCategory
} = require('../controllers/CategoryController')


// Adding new Category
router.post('/api/category/addNew',  upload.single("cateImage") , addNewCategory)

// get single categories
router.get('/api/category/getSingleCatgeory/:id', getSingleCategory)

// get all categories
router.get('/api/category/getAllCatyegries', getAllCategories)

// Updating Category
router.put('/api/category/updateCategory',upload.single("cateImage") , updateCategory)

module.exports = router;