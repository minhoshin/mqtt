# matt tentative

Write a very simple IoT API using ExpressJS and MQTT

https://medium.com/@cri.bh6/in-this-simple-example-im-going-to-show-how-to-write-a-very-simple-expressjs-api-that-uses-mqtt-to-57aa3ecdcd9e


```
$ npm i -g mosca pino-pretty
$ npm i mqtt

// mqtt run
// case 1
$ mosca -v | pino-pretty
$ node client/client1.js
$ node client/client2.js
$ node client/client3.js
// case 2
$ node server/server.js
$ node client/client1.js
$ node client/client2.js
$ node client/client3.js
```
