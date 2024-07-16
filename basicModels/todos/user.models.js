import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required: [true, "password is required"]
    },


},{timestamps: true})
//kya model bnau or kiske base p bnau 
export const User = mongoose.model("User", userSchema)
// this "User" will be "users" in DB in Mongo 
