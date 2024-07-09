import PlacesCollectionModel from "../Model/PlacesCollectionModel.js";


// post places collection
export const newCard =async (req,res) =>{
    try {
        const{heading,left_sub_heading,right_sub_heading,cards} = req.body

        // validate
        if(!heading || !left_sub_heading || !right_sub_heading || !cards){
            console.log("all card data req".bgYellow);
            return res.status(400).send("all card posted")
        }
        // creae new plan
        const newCard = await PlacesCollectionModel.create({
            heading,left_sub_heading,right_sub_heading,cards

        })
         // Send response
         console.log("Cards added successfully".bgGreen.white);        
         return res.status(201).send({ message: 'Cards added successfully', device: newCard });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getCards = async (req, res) => {
    try {
        const allCards = await PlacesCollectionModel.find();
        res.status(200).json(allCards);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
