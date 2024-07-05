import MenusModel from "../Model/MenusModel.js";
import PlacesCollecion from "../Model/PlacesCollectionModel.js";


// post places collection
export const newMenus =async (req,res) =>{
    try {
        const{logo_text,links,heading,description} = req.body

        // validate
        if(!logo_text || !links || !heading || !description){
            console.log("all menu data req".bgYellow);
            return res.status(400).send("all menu posted")
        }
        // creae new plan
        const newMenu = await MenusModel.create({
            logo_text,links,heading,description

        })
         // Send response
         console.log("Menu added successfully".bgGreen.white);        
         return res.status(201).send({ message: 'menu added successfully', device: newMenu });
    } catch (error) {
        console.log(`Api error ${error}`);
        return res.status(500).send("Internal Server Error");
    }
}

// get 

export const getMenus = async (req, res) => {
    try {
        const allMenus = await MenusModel.find();
        res.status(200).json(allMenus);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
