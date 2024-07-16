import mongoose from "mongoose";
import { type } from "os";

const subTodoSchema = new mongoose.Schema({
   content:{
    type:String,
    required: true
   },
   complete:{
    type:Boolean,
    default:false
   },
   createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
   }
},{timestamps:true})

export const SubTodo = mongoose.model("SubTodo",subTodoSchema)

// 5 video done