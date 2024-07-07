import mongoose from "mongoose";


const Cuisines= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },

    cuisines :[]
},{timeStamp:true}
)   

export default mongoose.model("Cuisines",Cuisines)