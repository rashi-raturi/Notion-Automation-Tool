const parseFormData = (data)=>{
    try {
        const courseName = data.courseName

        let topics = []

        for(let i=1;i<=5;i++){
            let unitWiseTopics = data[`unit${i}`].split(',') // square brackets necessary to access the property dynamically
            topics.push(unitWiseTopics)
        }
        
        return {courseName, topics}
        
    } catch (error) {
        console.log('Error occured while parsing form data : ', error)
    }
    
}

module.exports = parseFormData