const fetch = require("node-fetch");
const getDataFromLink = async () => {
  const api_url = "https://pokeapi.co/api/v2/pokedex/1/";
  try {
    const response = await fetch(api_url);
    var data = await response.json();

    return {
      status: "SUCCESS",
      data: data.pokemon_entries,
    };
  } catch (e) {
    return {
      status: "FAILED",
      error: e,
    };
  }
};
const addDataToDataBase = async (pokemons) => {
  console.log(pokemons);
for (let pokemon of pokemons) {
  if (pokemon.entry_number == 150) break;
  await pokemonModel.create({
    name: pokemon.pokemon_species.name,
    ID: pokemon.entry_number,
    link: pokemon.pokemon_species.url,
  });
 }
}


module.exports = { getDataFromLink ,addDataToDataBase};
