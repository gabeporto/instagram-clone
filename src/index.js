const express = require('express')
const router = require('./Utils/router')
const mongoose = require('mongoose')
require('dotenv').config()
const mongoConnection = process.env.MONGO_URI

const app = express()

mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("Connected to database"))

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log("Server running on port 3000"))