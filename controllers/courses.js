const connectToNotion = require('../db/connect')

// adds a new course and return its id
const addCourse = async (DB_ID, courseName) =>{
    try {
        const notion = connectToNotion(DB_ID)

        const course = await notion.pages.create({
            parent: {
                database_id : DB_ID,
            },
            properties: {
                Name: {
                title: [
                        {
                        text: {
                            content: courseName,
                            },
                        },
                    ],
                },
        }})

        console.log('Added a course successfully')
        return course.id

    } catch (error) {
        console.log('Error adding course : ', error)
        throw error

    }
}

module.exports = addCourse
