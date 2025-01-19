# Notion Syllabus Tracker Automation Tool

Description
------------

This project is an automation tool that helps streamline the process of tracking academic progress in Notion. It was created to automate the tedious task of manually creating courses, units, and topics in Notion. The tool allows users to copy-paste topics from a syllabus document, select a course name, and automatically create Notion entries for each topic.

Features
--------

* Automates the creation of courses, units, and topics in Notion
* Allows users to copy-paste topics from a syllabus document
* Supports course, unit, and topic creation with just a few clicks
* Customizable course name

## Setup Instructions

### Step 1: Notion Template 
Duplicate the Notion template by visiting the provided link: [Notion Template Link](https://rashi-raturi.notion.site/syllabus-template)

### Step 2: Clone the repo and install dependencies
1. Clone this repository using your preferred method:
   ```bash
   git clone https://github.com/rashi-raturi/Notion-Automation-Tool.git
   
2. Install dependencies by running
   ```bash
   npm install

### Step 3: Setup environment variables
 1. Create a .env file and put the following variables
    `COURSES_ID` - ID of the course database
    `UNITS_ID` - ID of the units database
    `TOPICS_ID` - ID of the topics database

2. **Do not commit the .env file**

### Step 4: Run the Application
  Run the following command in terminal:
  ```bash
   node app.js
```

Technologies Used
------------------
* Node.js & Express.js for backend scripting.
* Notion API for interacting with Notion databases.
* HTML & Bootstrap for the frontend form.
* JavaScript for handling data processing and API calls.

Credits/References
-------------------

* Notion API documentation: <https://developers.notion.com/docs>


