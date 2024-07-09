import RestaurantTypes from "../Model/RestaurantTypesModel.js"


// post menus
export const createRestaurantType =async (req,res) =>{
    try {

        const{heading,restaurantTypes} = req.body

        // validate
        if(!heading || !restaurantTypes){
            console.log("all data req".bgYellow);
            return res.status(400).send("all data posted")
        }
        // creae new plan
        const restaurantType = await RestaurantTypes.create({
            heading,restaurantTypes

        })

         // Send response
         return res.status(201).send({ message: 'Restaurant Types added successfully', device: restaurantType });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getRestaurantTypes = async (req, res) => {
    try {
        const allRestaurantTypes= await RestaurantTypes.find();
        res.status(200).json(allRestaurantTypes);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
