import mongoose from "mongoose";

const tourPackage = mongoose.Schema({
    logo_text:{
        type:String,
        require:true
    },
    links:{
        type:String,
        require:true
    },
    heading:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
},{timeStamp:true}
)   

export default mongoose.model("Menus",tourPackage)