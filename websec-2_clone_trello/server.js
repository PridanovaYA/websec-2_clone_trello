const PORT = process.env.PORT || 1337;
const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
server.listen(PORT, function () {
    console.log('Server port 1337');
});

//app.get('/events', (req, res) => {
//    console.log(req.url);
//    let request = new XMLHttpRequest();
//    let url = "https://opendata.mkrf.ru/v2/events/$?l=50";
//    request.open("GET", url, true);
//    request.setRequestHeader("X-API-KEY", "d5aa62ce093df5123895e5032d2f922a759e63cacf673ecd601b34c97a0c316e");
//    request.send(null);
//    request.onreadystatechange = () => {
//        if (request.readyState == 4) {
//            console.log(request);
//            res.send(request.response);
//        }
//    };
//})