const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        ws.send(`received message: ${message} from client!`)
    })
    ws.send(`Server has opened a connection ${ new Date().toLocaleString() }`)
})