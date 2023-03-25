const pokemonModel = require("../../dataBase/models/Pokemon");
const { getDataFromLink,addDataToDataBase } = require("../services/pokemonService");

class pokemon {
  static addPokemonsFromPokemonsServicetoDB = async (req, res) => {
    const response = await getDataFromLink();
    if (response.status === "SUCCESS") {
      const pokemons= response.data;
      try {
        await addDataToDataBase(pokemons);
        res.status(200).send("successfuly operation");
      } catch (e) {
        res.status(500).send({
          data: e,
          message: e.message,
        });
      }
    }else{
      res.status(500).send({error:response.error})
    }
  };
  static getAllPokemon = async (req, res) => {
    const pokemons = await pokemonModel.find({},{"_id":0,"__v":0});
    res.status(200).send(pokemons);
  };
}
module.exports = pokemon;
