const Orders = require('../models/OrdersSchema')


// Adding new Category
// const addNewOrder = async (req, res) => {
//     const newOrder = new Orders({...req.body})
//     try {
//         await newOrder.save();

//         res.status(201).json({newOrder , message: '*** New Order Added ***'})
//     }catch (error) {
//         console.log("Error in addNewOrder and error is : ", error)
//     }
// }

//Updating status of order
const updateOrderStatus = async (req, res) => {
    const {status} = req.body
    const {id} = req.params

    if(!id){
        return res.status(201).json({message: '*** Product Id is Required for Updation ****'})
    }else{
        //if (req.userId){
            const isExist = await Orders.findById(id);

            if(!isExist){
                return res.json({ message: '*** Product Does not Exists ***'})
            }else{
                try {
                    const updatedProduct = await Orders.findByIdAndUpdate(id ,{ $set: { ...req.body , status: status} } , {new: true} )

                    res.status(201).json({updatedProduct , message: '*** Product Updated SuccessFully ***'})
                } catch (error) {
                    return res.status(201).json({ message: '!!! Opps An Error Occured !!!' , error})
                    console.log("Error in updateProductStatus and error is : ", error)
                }
            //}else{
                //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
            //}
            }
    }


}

// // delete product
// const DeleteProduct = async (req, res) => {
//     const {name} = req.body
//     try {
//         const delProd = await Orders.findOneAndDelete({"name": name});
//         if(delProd){
//             res.status(201).json({message: "*** Product Deleted SuccessFully ***"})
//         }else{
//             res.json({message: "*** Error! Product Not Deleted SuccessFully ***"})
//         }
//     } catch (error) {
//         console.log("Error in DeleteProduct and error is : ", error)
//         res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
//     }
// }

// getting all Orders
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Orders.find();

        res.status(201).json({allOrders})
    }catch (error) {
        console.log("Error in getAllOrders and error is : ", error)
    }
}


// getting single Orders
const getSingleOrder = async (req, res) => {
    const {email} = req.body
    if(!email){
        return res.status(201).json({message : "*** Email is Mendatory for Searching ***"})
    }else{
        try {
            const orders = await  Orders.findOne({"email":email});
            if(orders){
                res.status(201).json({orders})
            }else{
                res.status(201).json({message : "*** No Orders found against the entered Email ****"})
            }
        }catchOrder) {
            console.log("Error in getSingleOrder and error is : ", error)
        }
    }
}


// getting single Orders
const getOrdersByStatus = async (req, res) => {
    const {status} = req.body
    if(!status){
        return res.status(201).json({message : "*** Status is Mendatory for Searching ***"})
    }else{
        try {
            const orders = await  Orders.find({"status":status});
            if(orders){
                res.status(201).json({orders})
            }else{
                res.status(201).json({message : "*** No Orders found ****"})
            }
        }catchOrder) {
            console.log("Error in getOrdersByStatus and error is : ", error)
        }
    }
}

module.exports = {
    updateOrderStatus,
    //DeleteProduct,
    getAllOrders,
    getSingleOrder,
    getOrdersByStatus
}