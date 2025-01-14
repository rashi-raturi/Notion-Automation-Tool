const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

const start = require('./controllers/main')
const router = require('./routes/routes')




app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router)




const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}...`)
})