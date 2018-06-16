const PORT = 8080
const ADDRESS = 'localhost'

const socket = new WebSocket(`ws://${ADDRESS}:${PORT}`)

window.onload = function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        let text = document.getElementById('messageInput').value.trim()
        socket.send(text)
    })  
    document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('serverText').innerText = ''
        let numOfMessages = document.getElementById('serverText').value.split('\n').length
        document.getElementById('messageCount').innerText = `(${numOfMessages - 1 })`
    })
}

// When a connection is opened
socket.addEventListener('open', function(event) {
    socket.send('Hello from the client!')
})

// Listen for messages from server
socket.addEventListener('message', function(event) {
    document.getElementById('serverText').innerText = event.data + '\n' + document.getElementById('serverText').value

    let numOfMessages = document.getElementById('serverText').value.split('\n').length
    document.getElementById('messageCount').innerText = `(${numOfMessages - 1 })`
})