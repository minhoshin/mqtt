# matt tentative

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
