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

module.exports = { getDataFromLink };
