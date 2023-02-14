const PORT = process.env.PORT || 1337;
const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
    request(path.join(__dirname, 'script.js'));
});
server.listen(PORT, function () {
    console.log('Server port 1337');
});