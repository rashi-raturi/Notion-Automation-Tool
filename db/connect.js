const { Client } = require('@notionhq/client')
require('dotenv').config()

const apiKey = process.env.NOTION_API_KEY

// connect to notion client
const connectToNotion = () => {
    const notionClient = new Client({
        auth: apiKey
    })

    return notionClient
}


module.exports = connectToNotion
