exports.consuming = async(kafka, number)=>{
    const consumer = kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: false })
    console.log(`consumer ${number} ready`);
    await consumer.run({
        eachMessage: ({topic,partition,message}) =>{
        console.log({
          number,
          topic,
          partition,
          offset: message.offset,
          value: message.value.toString(),
        })
      },
    })
}
