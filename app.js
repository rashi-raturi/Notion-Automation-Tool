const express = require('express')
const {relatedProperties} = require('./controllers/courses')
require('dotenv').config()
const app = express()

relatedProperties(process.env.DATABASE_ID)


const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}...`)
})