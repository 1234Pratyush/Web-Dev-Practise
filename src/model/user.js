const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
    },
   
    email : {
        type : String,
    },
   
    password : {
        type : String,
    },
   
    age : {
        type : Number,
    },
   
    gender : {
        type : String,
    },
   
},
{Timestamp : true}
)

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;