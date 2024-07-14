import mongoose from "mongoose";


const RestaurantTypes= mongoose.Schema({
    heading:{
        type:String,
        require:true
    },

    restaurantTypes :[]
},{timeStamp:true}
)   

export default mongoose.model("RestaurantType",RestaurantTypes)