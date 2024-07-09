import mongoose from "mongoose";


const places= mongoose.Schema({
    location:{
        type:String,
        require:true
    },
    total_places:{
        type:String,
        require:true
    },
},{timeStamp:true}
)   


const Localities= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },

    places :[places]
},{timeStamp:true}
)   

export default mongoose.model("Locality",Localities)