var express = require('express');
var app = express();
port = 5110;
host = '127.14.20.26'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
app.get('/Netid/', function (req, res) {
   var Name = 'Shethabhish'
   var Netid= 'xq4954'
   
    res.send(`<p>Name: ` +Name+ ` , Netid: `+Netid);
});