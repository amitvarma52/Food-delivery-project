import mongoose from "mongoose";


const Cards= mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    subtitle:{
        type:String,
        require:true
    },
},{timeStamp:true}
)   


const Collections= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },
    left_sub_heading:{
        type:String,
        require:true
    },
    right_sub_heading:{
        type:String,
        require:true
    },
    cards :[Cards]
},{timeStamp:true}
)   

export default mongoose.model("Collection",Collections)