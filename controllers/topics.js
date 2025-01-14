const connectToNotion = require('../db/connect')

const addTopics = async (DB_ID, unitPageIds, topics) => {
  try {
    const notion = connectToNotion(DB_ID)

    // Loop through 5 units
    for (let i = 0; i < 5; i++) { 
      const unitTopics = topics[i] // topics for the ith unit

      if(unitTopics.length == 0) continue

      // Loop through all the topics for the ith unit
      for (const topic of unitTopics) {
        await notion.pages.create({
          parent: {
            database_id: DB_ID,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: topic,
                  },
                },
              ],
            },
            Units: {
              relation: [{ id: unitPageIds[i] }], // Unit ID mapping
            },
          }
        })
      }
    }

    console.log('Topics have been added successfully')
  } catch (error) {
    console.log('Error adding topics: ', error)
  }
};

module.exports = addTopics