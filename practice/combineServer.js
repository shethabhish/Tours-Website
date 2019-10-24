var express = require('express');
var app = express();
port = 1120;
host = '127.73.73.11'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
app.get('/date/', function (req, res) {
   
    let datetime = Date();
   
    res.send(`<p>Date and Time :
        ${datetime} </p>`);
});
app.get('/Netid/', function (req, res) {
   var Name = 'Gayatri'
   var Netid= 'uh3536'
   
    res.send(`<p>Name: ` +Name+ ` , Netid: `+Netid);
});
