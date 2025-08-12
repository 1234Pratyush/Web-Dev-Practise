    const userModel = require("../model/userModel");
    const bcrypt = require("bcrypt");

    const createUser = async (req, res) => {
    try {
        const { email, name, password, age, gender } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          return res.status(400).send("User already found, Please sign-in");
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = await userModel.create({
        name,
        email,
        password: hashPassword,
        age,
        gender,
        });

        res.status(201).send({ message: "User Created Successfully" });
    } catch (err) {
        console.log("ERROR:" + err.message);
    }
    };

    const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
        res.status(401).send({ message: "Invalid Crediantials" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
        res.status(401).send({ message: "Invalid Crediantials" });
        }
        res.send("User Login Successfully");
    } catch (err) {
        res.status(400).send({ message: "Error while login:" + err.message });
    }
    };


    const allUsers = async(req,res)=>{
        try{
              const allUser = await userModel.find()
            res.status(200).send(allUser);
              
        }
        catch(err){
            res.status(400).send("Error:" + err.message);
        }
    }

    module.exports = { createUser, login ,allUsers};
