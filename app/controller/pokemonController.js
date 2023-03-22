const pokemonModel = require("../../dataBase/models/Pokemon");
const { getDataFromLink } = require("../services/pokemonService");

class pokemon {
  static addPokemonsFromPokemonsServicetoDB = async (req, res) => {
    const response = await getDataFromLink();
    if (response.status === "SUCCESS") {
      const pokemons= response.data;
      try {
        for (let pokemon of pokemons) {
          if (pokemon.entry_number == 150) break;
          await pokemonModel.create({
            name: pokemon.pokemon_species.name,
            ID: pokemon.entry_number,
            link: pokemon.pokemon_species.url,
          });
        }
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
    const pokemons = await pokemonModel.find();
    res.status(200).send(pokemons);
  };
}
module.exports = pokemon;
