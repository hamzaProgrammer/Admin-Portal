const Products = require('../models/ProductSchema')


// Adding new Category
const addNewProduct = async (req, res) => {
    let image
    if(req.file){
        req.body.productImg = req.file.filename
    }
    const newProduct = new Products({...req.body})
    try {
        await newProduct.save();

        res.status(201).json({newProduct , message: '*** New Category Added ***'})
    }catch (error) {
        console.log("Error in addNewProduct and error is : ", error)
    }
}

// Updating User Info
const updateProduct = async (req, res) => {
    const {name} = req.body
    if(req.file){
        req.body.productImg = req.file.filename
    }

    if(!name){
        return res.status(201).json({message: '*** Product Name is Required for Updation ****'})
    }else{
        //if (req.userId){
            const isExist = await Products.findOne({"name" : name});

            if(!isExist){
                return res.json({ message: '*** Product Does not Exists ***'})
            }else{
                try {
                    const updatedProduct = await Products.findOneAndUpdate({name : name} ,{ $set: req.body } , {new: true} )

                    res.status(201).json({updatedProduct , message: '*** Product Updated SuccessFully ***'})
                } catch (error) {
                    return res.status(201).json({ message: '!!! Opps An Error Occured !!!' , error})
                    console.log("Error in updateProduct and error is : ", error)
                }
            //}else{
                //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
            //}
            }
    }


}

// delete product
const DeleteProduct = async (req, res) => {
    const {name} = req.body
    try {
        const delProd = await Products.findOneAndDelete({"name": name});
        if(delProd){
            res.status(201).json({message: "*** Product Deleted SuccessFully ***"})
        }else{
            res.json({message: "*** Error! Product Not Deleted SuccessFully ***"})
        }
    } catch (error) {
        console.log("Error in DeleteProduct and error is : ", error)
        res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
    }
}

// getting all Products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find();

        res.status(201).json({allProducts})
    }catch (error) {
        console.log("Error in getAllProducts and error is : ", error)
    }
}


// getting single Products
const getSingleProd = async (req, res) => {
    const {data} = req.params
    try {
        const product = await await Products.find({$or: [{"name": data},{"brandName": data}]});
        if(product){
            res.status(201).json({product})
        }else{
            res.status(201).json({message : "*** Product Does not Exist ****"})
        }
    }catch (error) {
        console.log("Error in getSingleProd and error is : ", error)
    }
}

module.exports = {
    addNewProduct,
    updateProduct,
    DeleteProduct,
    getAllProducts,
    getSingleProd
}