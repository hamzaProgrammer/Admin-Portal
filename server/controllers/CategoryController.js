const Categories = require('../models/categorySchema')


// Adding new Category
const addNewCategory = async (req, res) => {
    let image
    if(req.file){
        req.body.cateImage = req.file.filename
    }
    const newCategory = new Categories({...req.body})
    try {
        await newCategory.save();

        res.status(201).json({newCategory , message: '*** New Category Added ***'})
    }catch (error) {
        console.log("Error in addNewCategory and error is : ", error)
    }
}


// Updating Category
const updateCategory = async (req, res) => {
    const {name} = req.body
    let image
    if(!req.file || !req.body.name){
        res.json({ message: '*** Category Image and Name is Required ***'})
    }else{
        const isExist = await Categories.findOne({"name" : name});
        if(!isExist){
            return res.json({ message: '*** Category Does not Exists ***'})
        }else {
            image = req.file.filename
            try {
                const updatedCategory = await Categories.findOneAndUpdate({name : name} ,{ $set: {name : name , cateImage: image }} , {new: true} )
                res.status(201).json({updatedCategory , message: '*** Category Updated ***'})
            }catch (error) {
                console.log("Error in updateCategory and error is : ", error)
            }
        }
    }
}


// getting all categories
const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Categories.find();

        res.status(201).json({allCategories})
    }catch (error) {
        console.log("Error in getAllCategories and error is : ", error)
    }
}


// getting all categories
const getSingleCategory = async (req, res) => {
    const {id} = req.params
    try {
        const category = await await Categories.findOne({_id : id});

        res.status(201).json({category})
    }catch (error) {
        console.log("Error in getSingleCategory and error is : ", error)
    }
}

module.exports = {
    addNewCategory,
    updateCategory,
    getAllCategories,
    getSingleCategory
}