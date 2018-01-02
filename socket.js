var http = require('http')
var socketio = require('socket.io')
var fs = require('fs')

var handler = (req, res) => {

    fs.readFile(__dirname + '/index.htm',
        (err, data) => {

            if (err) {
                res.writeHead(500)
                return res.end('error reading')
            }
            else {
                res.writeHead(200)
                return res.end(data)
            }
        })
}

var app = http.createServer(handler)
var io = socketio.listen(app)

io.sockets.on('connection', (socket) => {
    setInterval(() => {
        var timestamp = Date.now()
        console.log('Emitted ' + timestamp);
        socket.emit('emitter', timestamp)
    }, 2000)

    socket.on('submit', (data) => {
        console.log('Submited: ' + data);
    })
})

app.listen(8080)

console.log('server runnig');