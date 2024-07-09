import mongoose from "mongoose";

const signUp= mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
},{timeStamp:true}
)   

export default mongoose.model("signUp",signUp)