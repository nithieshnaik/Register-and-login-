const mongoose=require("mongoose") 


const workschema = new mongoose.Schema({
    name: String ,
    email: String ,
    password: String 
}) 

const workmodel= mongoose.Schema("workers", workschema)
module.exports =  workmodel 