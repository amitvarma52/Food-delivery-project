import CuisinesModel from "../Model/CuisinesModel.js";
import RestaurantChainsModel from "../Model/RestaurantChainsModel.js"

// post menus
export const createRestaurantChain =async (req,res) =>{
    try {

        const{heading,restaurantChains} = req.body

        // validate
        if(!heading || !restaurantChains){
            console.log("all data req".bgYellow);
            return res.status(400).send("all data posted")
        }
        // creae new plan
        const chains = await RestaurantChainsModel.create({
            heading,restaurantChains

        })

         // Send response
         return res.status(201).send({ message: 'Restaurant chains added successfully', device: chains });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getRestaurantChains = async (req, res) => {
    try {
        const allRestchains= await RestaurantChainsModel.find();
        res.status(200).json(allRestchains);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
