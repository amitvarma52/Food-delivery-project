import CuisinesModel from "../Model/CuisinesModel.js";

// post menus
export const createCuisine =async (req,res) =>{
    try {

        const{heading,cuisines} = req.body

        // validate
        if(!heading || !cuisines){
            console.log("all data req".bgYellow);
            return res.status(400).send("all data posted")
        }
        // creae new plan
        const cuisine = await CuisinesModel.create({
            heading,cuisines

        })

         // Send response
         console.log("Cuisines added successfully".bgGreen.white);        
         return res.status(201).send({ message: 'Location added successfully', device: cuisine });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getCuisines = async (req, res) => {
    try {
        const allCuisines= await CuisinesModel.find();
        res.status(200).json(allCuisines);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
