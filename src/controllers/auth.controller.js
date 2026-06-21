const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {

    try {
        const { username, email, password, role } = req.body;
    
        const isUserAlreadyExists = await userModel.findOne({
            $or: [
                {username},
                {email}
            ]
        })

        if(isUserAlreadyExists){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role
        })

        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET)
        res.cookie("token", token)

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = { registerUser }