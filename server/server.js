// var mosca = require('mosca')
 
// var settings = {
//       port: 1883,
//       persistence: mosca.persistence.Memory
// };
 
// var server = new mosca.Server(settings, function() {
//       console.log('Mosca server is up and running')
// });
 
// server.clientConnected = function(client) {
//     console.log('client connected', client.id);
// };
 
// server.published = function(packet, client, cb) {
 
//   if (packet.topic.indexOf('echo') === 0) {
//     console.log('ON PUBLISHED', packet.payload.toString(), 'on topic', packet.topic);
//     return cb();
//   }
 
//   var newPacket = {
//     topic: 'echo/' + packet.topic,
//     payload: packet.payload,
//     retain: packet.retain,
//     qos: packet.qos
//   };
 
//   console.log('newPacket', newPacket);
 
//   server.publish(newPacket, cb);
 
// };

var mosca = require('mosca');
 
// var ascoltatore = {
//   //using ascoltatore
//   type: 'mongo',
//   url: 'mongodb://localhost:27017/mqtt',
//   pubsubCollection: 'ascoltatori',
//   mongo: {}
// };
 
var settings = {
  port: 1883,
//   backend: ascoltatore
};
 
var server = new mosca.Server(settings);
 
server.on('clientConnected', function(client) {
    console.log('client connected:', client.id);
});

server.on('published', function(packet, client) {
  console.log('Published:', packet.payload);
  if(client){
    console.log('client Published:', client);
  }
});
 
server.on('ready', setup);

function setup() {
  console.log('Mosca server is up and running');
}