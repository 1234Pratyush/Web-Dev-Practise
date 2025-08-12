const express = require('express');
const app = express();
const connectDB = require('./config/database');



const startServer = async()=>{
    try{
        await connectDB();
        app.listen(process.env.PORT,()=>{
            console.log("Server is running on port:" ,process.env.PORT);
        });
    }
    catch(err){
        console.log("Server connection problem" + err.message);
    }
}

startServer();

