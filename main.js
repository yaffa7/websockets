const PORT = 8080
const ADDRESS = 'localhost'

const socket = new WebSocket(`ws://${ADDRESS}:${PORT}`)

window.onload = function() {

    document.getElementById('submitBtn').addEventListener('click', function() {
        let text = document.getElementById('messageInput').value.trim()
        socket.send(text)
    })
    
}

// When a connection is opened
socket.addEventListener('open', function(event) {
    socket.send('Hello from the client!')
})

// Listen for messages from server
socket.addEventListener('message', function(event) {
    document.getElementById('serverText').innerText = event.data + '\n' + document.getElementById('serverText').value
})