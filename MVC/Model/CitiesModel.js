import mongoose from "mongoose";


const Cities= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },

    cities :[]
},{timeStamp:true}
)   

export default mongoose.model("Cities",Cities)