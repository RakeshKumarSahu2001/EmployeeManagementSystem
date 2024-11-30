import mongoose from "mongoose";

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    // img:{
    //     type:String,
    //     require:true
    // },
    email:{
        type:String,
        require:true,
        unique:true
    },
    contactNo:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        enum:["male","female"],
        require:true
    },
    course:{
        type:[String],
        require:true
    },
},{timestamps:true})

export const Employee=mongoose.model("employee",EmployeeSchema)