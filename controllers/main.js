const connectToNotion = require('../db/connect')
const addCourse = require('./courses')
const addUnits = require('./units')



const start = async (DB_IDS, courseName)=>{
    // add a course
    // return a course id

    const courses_db_id = DB_IDS[0]
    const COURSE_ID = await addCourse(courses_db_id, courseName)


    // add 5 units and link them to that course id
    // return 5 id of those units

    const units_db_id = DB_IDS[1]
    let unitPageIDs = await addUnits(units_db_id, COURSE_ID)



    // add topics and link them to these unit ids
}

module.exports = start