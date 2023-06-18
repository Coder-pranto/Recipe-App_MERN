const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserModel = require("../models/model");


const registerUser = async(req,res)=>{
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(user){
        return res.status(409).json({message: "User already exist!"}); // 409 == conflict
    }
    const hashedPassowrd = await bcrypt.hash(password, saltRounds); 
    const newUser = new UserModel({username, password: hashedPassowrd});
    newUser.save();

    res.status(201).json("User is registered successfully!"); //201== created
}

const loginUser = async(req, res) => {

    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(!user){
        return res.status(404).json({message: "User doesn't exist!"}); // 404 == not found
    }

    const checkPassword =  bcrypt.compare(password, user.password);
    if(!checkPassword){
        return res.status(401).json({message: "Username or Password is Incorrect!"});//401==unauthorized
    }

    const token = jwt.sign({_id:user._id}, "privatekey")

    res.status(200).json({ message: "Login successful!",username, userID: user._id, token});

}

module.exports = {registerUser,loginUser};