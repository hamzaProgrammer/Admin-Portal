const Users = require('../models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

// signin Up
const addNewUser = async (req, res) => {
    const {
        username,
        email,
        password,
        phoneNo,
        dateOfBirth,
        address,
        role,
    } = req.body;

    let profilePic
    if(req.file){
        profilePic = req.file.filename
    }
    

    if(!username, !email, !password, !phoneNo, !dateOfBirth, !address, !role ){
        return res.json({message : "Please fill All required credentials"});
    }else{
        const check = await Users.find({ $or: [ {email: email} , { username: username}]})

        if(check.length > 0 ){
            return res.json({message: '*** UserName or Email Already taken ***'})
        }else{
            const hashedPassword = await bcrypt.hash(password, 10); // hashing password

            const newUser = new Users({ ...req.body , password: hashedPassword , profilePic: profilePic })

            try {
                const addedUser = await newUser.save();

                res.status(201).json({addedUser , message: '*** User SuccessFully Added ***'})
            }catch (error) {
                console.log("Error in addNewUser and error is : ", error)
            }
        }
    }
    
}

// Logging In
const LogInUser = async (req, res) => {
    const { email ,  password } = req.body

        if(!email  || !password){
            res.json({mesage : "**** Please Required Credientials ***"})
        }else {
            try {
                const isUserExists = await Users.findOne({email});

                if(!isUserExists){
                    return res.json({ message: "*** User Not Found ***"})
                }

                const isPasswordCorrect = await bcrypt.compare(password, isUserExists.password); // comparing password
                if (!isPasswordCorrect) {
                    return res.json({
                        message: '*** Invalid Credientials ***'
                    })
                }

                const token = jwt.sign({id: isUserExists._id} , JWT_SECRET_KEY , {expiresIn: '5d'}); // gentating token

                return res.json({
                    myResult: isUserExists,
                    message: '*** User Signed In SuccessFully ****',
                    token
                });
            } catch (error) {
                console.log("Error in LogInUser and error is : ", error)
            }
        }

}

// getting all Drivers
const getAllDrivers = async (req, res) => {
   try {
        const allDrivers = await Users.find({role:"driver"});

        res.status(201).json({allDrivers})
    }catch (error) {
        console.log("Error in getAllDrivers and error is : ", error)
    }
}

// getting all Drivers
const getSingleUser = async (req, res) => {
    const {id} = req.params;
   try {
        const user = await Users.findById(id);

        res.status(201).json({user})
    }catch (error) {
        console.log("Error in getAllDrivers and error is : ", error)
    }
}

// Updating User Info
const updateUserInfo = async (req, res) => {
    const {email , password} = req.body
    console.log("Body : ", req.body)
    if(req.file ){
        req.body.profilePic = req.file.filename
    }

    if(!email){
        return res.status(201).json({message: '*** Email is Required for Updation ****'})
    }else{
        //if (req.userId){
            try {
                if(password){
                    req.body.password = await bcrypt.hash(password, 10); // hashing password
                }
                const updatedUser = await Users.findOneAndUpdate({email : email} ,{ $set: req.body } , {new: true} )

                res.status(201).json({updatedUser , message: '*** User Updated SuccessFully ***'})
            } catch (error) {
                return res.status(201).json({ message: '!!! Opps An Error Occured !!!' , error})
                console.log("Error in updateUserInfo and error is : ", error)
            }
        //}else{
            res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
        //}
    }


}




module.exports = {
    addNewUser,
    LogInUser,
    getAllDrivers,
    updateUserInfo,
    getSingleUser,
}