const connectToNotion = require('../db/connect')

// get database info
const getInfo = async (DB_ID) =>{
    const notion = connectToNotion()

    try {
        const response = await notion.databases.retrieve({
            database_id: DB_ID
        })
        return response

    } catch (error) {
        console.log(error)
    }
}


// related properties
const relatedProperties = async(DB_ID)=>{
    try {
        const data = await getInfo(DB_ID)

        const propertyObj = data.properties

        let relations = new Map(
            Object.keys(propertyObj)
            .filter(key => propertyObj[key] && propertyObj[key].type === 'relation')
            .map(key => [propertyObj[key].name , propertyObj[key].relation.database_id])
        )

        return relations
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    getInfo,
    relatedProperties
}
