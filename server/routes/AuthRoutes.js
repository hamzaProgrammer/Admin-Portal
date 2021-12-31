const express = require('express');
const router = express.Router();
const {
    addNewUser,
    LogInUser,
    getAllDrivers,
    updateUserInfo,
    getSingleUser,
} = require('../controllers/AuthControllers')

// multer coding
const multer = require("multer")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/users')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})
const upload = multer({
        storage: storage,
});


// Sign Up User
router.post('/api/users/register', upload.single('profilePic') , addNewUser)

// Sign In User
router.post('/api/users/signin', LogInUser)

// Sign In User
router.get('/api/users/getAllDrivers', getAllDrivers)

// get single user
router.get('/api/users/getSingleUser/:id', getSingleUser)

// updating User Info
router.put('/api/users/updateUser', upload.single('avatar'), updateUserInfo);


module.exports = router;