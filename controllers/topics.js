const connectToNotion = require('../db/connect')

const addTopics = async (DB_ID, unitPageIds, topics) =>{
    try {
        const notion = connectToNotion(DB_ID)

        for(const i=1;i<=5;i++){

        }

        console.log('Topics have been added successfully')
        
    } catch (error) {
        console.log('Error adding topics : ', error)
    }
}