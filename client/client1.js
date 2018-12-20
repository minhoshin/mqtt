var mqtt = require('mqtt');
// var client  = mqtt.connect('mqtt://127.0.0.1');

var mqttOptions = {
    host: '127.0.0.1',
    port: 1883,
    // protocol: '',
    // username: '',
    // password: '',
}

var topic = "testtopic";

var client = mqtt.connect(mqttOptions);
 
client.on('connect', function () {
    console.log("connected: "+ client.connected);
    // client.subscribe('presence');
    // client.publish(topic, 'Hello mqtt test message');
    setInterval(
        function(){
            var now = new Date();
            client.publish(topic, now.toString());
    }, 5000);

    function publish(topic,msg,options){
        console.log("publishing",msg);
      if (client.connected == true){
        client.publish(topic,msg,options);
      }
    }
});
 
// client.on('message', function (topic, message) {
//       // message is Buffer
//       console.log(message.toString());
//       client.end();
// });

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

// client.subscribe(topic/topic array/topic object, [options], [callback])
// 하나의 Topic이면 string을 써도 된다.
// 여러 topic들을 같은 qos로 구독하고 싶다면 array로 하면된다.
// 여러 topic들을 다른 qos로 구독하고 싶다면 object를 사용하면 된다.
// const topic_s="topic";
// const topic_list=["topic2","topic3","topic4"];
// const topic_o={"topic22":0,"topic33":1,"topic44":1};
// client.subscribe(topic_s, {qos:1});
// client.subscribe(topic_list, {qos:1});
// client.subscribe(topic_o);