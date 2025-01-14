const express = require('express')
const app = express()

require('dotenv').config()

const start = require('./controllers/main')


let DB_IDS = [process.env.COURSES_DB_ID, process.env.UNITS_DB_ID, process.env.TOPICS_DB_ID]
start(DB_IDS, 'Test course')



const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}...`)
})