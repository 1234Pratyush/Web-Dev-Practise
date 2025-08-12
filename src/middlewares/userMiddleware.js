const userModel = require('../model/user');
const bcrypt = require('bcrypt');

const createUser = async (req,res) =>{
    try{
             const { email, name, password, age, gender } = req.body;
        const existingUser = await userModel.findOne({email})
        if (usexistingUserer) {
           return res.status(400).send("User already found, Please sign-in");
        }
        
    const hashPassword = await bcrypt.hash(password,10);
         const createUser = await userModel.create({
           name,
           email,
           password: hashPassword,
           age,
           gender,
         });
        
         res.status(201).send({message : "User Created Successfully"})
    }
    catch(err){
        console.log("ERROR:" + err.message)
    }
}

module.exports = createUser;

