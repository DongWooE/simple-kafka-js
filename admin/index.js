exports.createPartitions=async(kafka)=>{
    try {    
        const admin = kafka.admin()
        await admin.connect()
        const topics = await admin.listTopics()
        if(!topics.includes('test-topic')){
            await admin.createPartitions({
            topicPartitions: [{
                topic : 'test-topic',
                count : 3,
                }],
             })
        }
        await admin.disconnect()   
    } catch (error) {
        console.error(error);
    }
}