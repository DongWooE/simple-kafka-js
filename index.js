const { Kafka } = require('kafkajs')
const {producing} = require('./producer');
const {consuming} = require('./consumer');
const {createPartitions} = require('./admin');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})
createPartitions(kafka);
consuming(kafka);
producing(kafka)
    .then((producer)=>{
        let timerId = setInterval(() =>{
            console.log("producer sending");
            producer.send({
                topic: 'test-topic',
                messages: [
                  { value: 'Hello KafkaJS user!' },
                ],
              })
        }, 2000);
        setTimeout(async() => { clearInterval(timerId); console.log('정지');
        await producer.disconnect();
    }, 10000);
    })
    .catch((error)=>console.log(error))


