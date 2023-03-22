const router = require("express").Router()
const pokemon = require("../app/controller/pokemonController.js")

router.post('/addAllPokemon', pokemon.addPokemonsFromPokemonsServicetoDB)
router.get('/getAllPokemon', pokemon.getAllPokemon)

module.exports = router