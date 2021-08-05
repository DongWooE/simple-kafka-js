exports.producing = (kafka)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const producer = kafka.producer();
            await producer.connect()
            resolve(producer);            
        } catch (error) {
            reject(error);
        }
    })
}