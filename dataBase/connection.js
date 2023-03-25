const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
mongoose.connection.on('connected', () => {
    console.log("Connected to database")
})
mongoose.connection.on('error', (err) => {
    console.log("Database connection error => ", err)
})