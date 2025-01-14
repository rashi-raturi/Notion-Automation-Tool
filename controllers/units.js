const connectToNotion = require('../db/connect')

const addUnits = async (DB_ID, Course_ID) =>{
    try {
        const notion = connectToNotion(DB_ID)

        const unitPageIDs = []
        // creating 5 units pages and linking to the course
        for(const i=1;i<=5;i++){
            const page = await notion.pages.create({
                parent: DB_ID,
                properties: {
                    Name: {
                    title: [
                        {
                        text: {
                            content: `Unit {i}`,
                        },
                        },
                    ],
                    },
                    Courses: {
                    relation: [{ id: Course_ID }],
                    },
                },
            })

            unitPageIDs.push((page.id))
            console.log('Units have been successfully created')

            return unitPageIDs
        }

    } catch (error) {
        console.log('Error adding units : ', error)
    }
    
}

module.exports = addUnits