exports.consuming = async(kafka)=>{
    const consumer = kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: false })
    console.log("consumer ready");
    await consumer.run({
        eachMessage: ({topic,partition,message}) =>{
        console.log({
          topic,
          partition,
          offset: message.offset,
          value: message.value.toString(),
        })
      },
    })
}