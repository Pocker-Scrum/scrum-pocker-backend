var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const socketIo = require("socket.io")
const http = require("http")
const PORT = process.env.PORT || 5000
const server = http.createServer(app)

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000"
    }
}) //in case server and client run on different urls

io.on("connection", (socket) => {
    console.log("client connected: ", socket.id)

    socket.join("clock-room")

    socket.on("disconnect", (reason) => {
        console.log(reason)
    })
})
setInterval(() => {
    io.to("clock-room").emit("time", new Date())
}, 1000)

server.listen(PORT, err => {
    if (err) console.log(err)
    console.log("Server running on Port ", PORT)
})

var indexRouter = require('./src/routes/index');
var messageRouter = require('./src/routes/message.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/message', messageRouter);

module.exports = app;
