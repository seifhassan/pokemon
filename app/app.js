const express = require("express")
const app = express()
require('../database/connection')

const pokemonRouter = require('../routes/pokemonRouter')

app.use("/pokemon",pokemonRouter)

module.exports = app;