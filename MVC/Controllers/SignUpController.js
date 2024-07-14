import SignUpModel from "../Model/SignUpModel.js";
export const newUser = async (req,res) =>{

try {
            const{firstName,lastName,email,phone} =req.body;
            
            // validate input
            if(!firstName){
                return res.status(400).send("Enter your firstName");}
                if(!lastName){
        return res.status(400).send("Enter your lastname");}
    if(!email){
        return res.status(400).send("Enter your email id");}
        if(!phone){
            return res.status(400).send("Enter your Phone number");}
                // check is user exist
                const chkExisting = await SignUpModel.findOne({email});
                if(chkExisting){
                    return res.status(400).send("Email already registered");}

    // Create user  
    const newUser = await SignUpModel.create({ 
        firstName, 
        lastName,
        email,
        phone
     });
        
        // Send response
        return res.status(201).send({ 
            status:"success",
            message: 'User registered successfully', 
            user: newUser ,
        });
    }
catch (error) {
        console.log(`Error in API: ${error}`);
        return res.status(500).send("Internal Server Error");
    }
};

export const getUser = async (req, res) => {
    try {
        const allUsers = await SignUpModel.find({});
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};
