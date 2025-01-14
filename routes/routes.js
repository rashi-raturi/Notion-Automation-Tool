const express = require('express')
const path = require('path')
const parseFormData = require('../controllers/form-data')
const start = require('../controllers/main')
require('dotenv').config()

const router = express.Router()

const DB_IDS = [process.env.COURSES_DB_ID, process.env.UNITS_DB_ID, process.env.TOPICS_DB_ID]

router.route('/submit-form')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname, '../public', 'index.html'))
    })
    .post((req,res)=>{
        const data = req.body

        const parsedData = parseFormData(data)
        
        start(DB_IDS, parsedData)
        
    })


module.exports = router