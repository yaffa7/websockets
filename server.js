const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        ws.send(`received message: ${message} from client!`)
        console.log(`IP adress from client ${req.connection.remoteAddress}`)
    })
    ws.send(`Server has opened a connection ${ new Date().toLocaleString() }`)
})