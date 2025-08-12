const express = require('express');
const app = express();
const connectDB = require('./src/config/database');

const cookieParser  = require('cookie-parser');
const userRoutes = require('./src/routes/userRoute')

require("dotenv").config();
app.use(express.json());

app.use('/api/users',userRoutes);

const startServer = async()=>{
    try{
        await connectDB();
        app.listen(process.env.PORT || 3000 ,()=>{
            console.log("Server is running on port:", process.env.PORT || 3000);
        });
    }
    catch(err){
        console.log("Server connection problem" + err.message);
    }
}

startServer();

