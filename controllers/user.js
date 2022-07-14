import Users from "../models/Users.js";

//Update User
export const updateUser = async (req,res,next)=>{
    try{
        const updateUsers = await Users.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateUsers)

    }catch(err){
        next(err)
    }
}

//DeleteUser
export const deleteUser = async (req,res,next)=>{
    try{
        await Users.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User has deleted");
    }catch(err){
        next(err)
    }
}

// GetUser
export const getUser = async (req,res,next)=>{
    try{
        const user = await Users.findById(
            req.params.id
        );
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

//GetAllUser
export const getAllUser = async (req,res,next)=>{
    try{
        const users = await Users.find(
            req.params.id
        );
        res.status(200).json(users)
    }
    catch(err){
        next(err)
    }
}

