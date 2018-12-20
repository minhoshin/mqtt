var mqtt = require('mqtt');
// var client  = mqtt.connect('mqtt://127.0.0.1');

var mqttOptions = {
    host: '127.0.0.1',
    port: 1883,
    clientId: 'mqttjs02',
    // protocol: '',
    // username: '',
    // password: '',
}

var client = mqtt.connect(mqttOptions);
 
client.on('connect', function () {
    console.log("connected is "+ client.connected);
    client.subscribe('testtopic');
});
 
client.on('message', function (topic, message, packet) {
      // message is Buffer
      console.log(`topic is ${topic}`);
      console.log(`message is ${message.toString()}`);
    //   console.log(packet);
      client.end();
});
 
// client.end();

client.on("error", (error) => { 
    console.log("Can't connect" + error);
    process.exit(1);
});

// client.publish(topic, message, [options], [callback])
// var options = {
//     retain:true,
//     qos:1
//   };
//   client.publish("testtopic", "test message", options)