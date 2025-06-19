import bcrypt from 'bcrypt'
import {User} from "../models/userModel.js"
import {generateToken} from "../config/JWT.js"
export const registerController = async(req,res)=>{
    const {name,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    if(!name){
        return res.status(400).json({message:"Name is required"})
    }
    if(!email){
        return res.status(400).json({message:"Email is required"})
    }
    if(!password){
        return res.status(400).json({message:"Password is required"})
    }
    const existingUser = await User.findOne({email:email});
    if(existingUser){
        return res.status(400).json({message:"Email already exists"})
    }
    const user = new User({name,email,password:hashedPassword});
    await user.save();

    const token = generateToken({ userId: user.id, username: user.email });
    res.status(200).json({ message: 'registration Successfully', token , user});
}