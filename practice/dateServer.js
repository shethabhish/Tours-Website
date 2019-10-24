var express = require('express');
var app = express();
port = 5555;
host = '127.24.26.6'; // Any loopback address
 app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
app.get('/datetime/', function (req, res) {
   
    let datetime =Date();
   
    res.send(`<p>Date and Time :
        ${datetime} </p>`);
})