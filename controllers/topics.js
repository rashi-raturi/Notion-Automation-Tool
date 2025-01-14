const connectToNotion = require('../db/connect')

const addTopics = async (DB_ID, unitPageIds, topics) => {
    try {
      const notion = connectToNotion(DB_ID);
  
      for (let i = 1; i <= 5; i++) {
        // topics for the ith unit
        const unitTopics = topics[i]; 
        
        // looping through all the topics and creating a page for them to link them to units
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
                relation: [{ id: unitPageIds[i - 1] }], 
              },
            },
          });
        }
      }
  
      console.log('Topics have been added successfully');
    } catch (error) {
      console.log('Error adding topics: ', error);
    }
  };
  