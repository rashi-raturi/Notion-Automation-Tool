const addCourse = require('./courses')
const addUnits = require('./units')
const addTopics = require('./topics')


const start = async (DB_IDS, parsedData)=>{
    try {
        // add a course
        // return a course id

        const courses_db_id = DB_IDS[0]
        const courseName = parsedData.courseName
        const COURSE_ID = await addCourse(courses_db_id, courseName)

        // add 5 units and link them to that course id
        // return 5 id of those units

        const units_db_id = DB_IDS[1]
        let unitPageIDs = await addUnits(units_db_id, COURSE_ID)

        // add topics and link them to these unit ids
        let topics = parsedData.topics
        const topics_db_id = DB_IDS[2]
        await addTopics(topics_db_id, unitPageIDs, topics)


        console.log('Operation completed successfully!')

    } catch (error) {
        console.log(error)
    }
}

module.exports = start