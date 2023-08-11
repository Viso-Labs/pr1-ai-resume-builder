const User = require("../models/userModel");
const validate = require('../utils/validation');
const bcrypt = require("bcrypt");
const fs = require("fs");

const userSignUp = async (req, res) => {
    const { fullName, email, password } = req.body;

    //validation
    const result = validate.register_validation({ fullName, email, password });
    if (result?.error) {
        return res.status(400).json({
            success: false,
            message: result.error.details
        });
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    // const newUser = await User.create({ fName, lName, email, password:hashedPwd });

    try {
        const role1 = "NORMAL_USER"
        const role2 = "PREMIUM_USER"
        await User.create({ fullName, email, password:hashedPwd, role:role1 });
        return res.status(200).json({ success: true})
      } catch (error) {
        console.log('error',error)
        return res.status(400).json({ success: false, message: 'User email is already exist'})
      }
}

const userLogin = async (req, res) => {
    const { token, user } = req.body;

    const tokenDetails = { token: token, logged_at: new Date() }
    let UserRole = user.role;
    const currentDate = new Date();
    const initDate = new Date(user.roleInit);  
    const expireDate = new Date(user.roleExpire);  

    if(UserRole==="PREMIUM_USER" && currentDate>expireDate){
        UserRole = "NORMAL_USER"
    }

    const updateUser = await User.updateOne(
      { _id: user.id },
      { $set: { "tokenDetails": tokenDetails, "role":UserRole } },
      { expireAfterSeconds: 86400, upsert: true }
    );

    if(updateUser.acknowledged){
        return res.json({ token });
    }else{
        return res.status(400).json({ success: false, message: 'Internal server error'})
    }
}

const userLogout = async (req, res) => {
    const { user } = req.body;

    const tokenDetails = { token: "", logged_at: "" }

    const updateUser = await User.updateOne(
      { _id: user.id },
      { $set: { "tokenDetails": tokenDetails } },
    );

    if(updateUser.acknowledged){
        res.status(200).json({
            message: "Logout successfully",
            success: true
        })
    }else{
        return res.status(400).json({ success: false, message: 'Internal server error'})
    }
}

module.exports = {
    userSignUp,
    userLogin,
    userLogout
}