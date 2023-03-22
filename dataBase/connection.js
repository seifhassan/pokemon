const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://seif:WHRAk2qefZs59HEm@pokemon.wp1pt3e.mongodb.net/test")
mongoose.connection.on('connected', () => {
    console.log("Connected to database")
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error => ", err)
})