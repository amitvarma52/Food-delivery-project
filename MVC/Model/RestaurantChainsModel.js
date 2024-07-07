import mongoose from "mongoose";


const RestaurantChains= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },

    restaurantChains :[]
},{timeStamp:true}
)   

export default mongoose.model("RestaurantChains",RestaurantChains)