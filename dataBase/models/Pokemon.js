const mongoose = require("mongoose")
const PokemonSchema = mongoose.Schema({
    name:{
        type: String, 
        required:true, 
    }, 
    link:{
        type: String, 
        required:true, 
    }, 
    ID:{
        type: Number, 
        required:true, 
    },  
})
const pokemon = mongoose.model("pokemon", PokemonSchema)
module.exports = pokemon