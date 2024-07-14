import CuisinesModel from "../Model/CuisinesModel.js";
import CityModel from "../Model/CitiesModel.js"

// post menus
export const createCity =async (req,res) =>{
    try {

        const{heading,cities} = req.body

        // validate
        if(!heading || !cities){
            console.log("all data req".bgYellow);
            return res.status(400).send("all data posted")
        }
        // creae new plan
        const city = await CityModel.create({
            heading,cities

        })

         // Send response
         return res.status(201).send({ message: 'City added successfully', device: city });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getCities = async (req, res) => {
    try {
        const allCities= await CityModel.find();
        res.status(200).json(allCities);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
