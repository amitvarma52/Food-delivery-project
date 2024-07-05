import LocalityModel from "../Model/LocalitiesModel.js";

// post menus
export const createLocation =async (req,res) =>{
    try {
        const{heading,places} = req.body

        // validate
        if(!heading || !places){
            console.log("all data req".bgYellow);
            return res.status(400).send("all data posted")
        }
        // creae new plan
        const newLocation = await LocalityModel.create({
            heading,places

        })
         // Send response
         console.log("Location added successfully".bgGreen.white);        
         return res.status(201).send({ message: 'Location added successfully', device: newLocation });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getLocations = async (req, res) => {
    try {
        const allLocations = await LocalityModel.find();
        res.status(200).json(allLocations);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
