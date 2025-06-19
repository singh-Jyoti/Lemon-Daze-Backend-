import bcrypt from 'bcrypt'
import {User} from "../models/userModel.js"
import { generateToken } from '../config/JWT.js';

export const loginController = async(req , res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({message : "User not found , Please register"});
    }
    const isMatch = await bcrypt.compare(password , user.password);

    if(!isMatch){
        return res.status(404).json({message : "Invalid password"});
    }

    const token = generateToken({ userId: user.id, username: user.email });
    res.status(200).json({ message: 'User Logged in Successfully', token , user});
}