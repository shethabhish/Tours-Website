var express = require('express');
var app = express();
port = 5110;
host = '127.73.73.42'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
app.get('/Netid/', function (req, res) {
   var Name = 'Gayatri'
   var Netid= 'uh3536'
   
    res.send(`<p>Name: ` +Name+ ` , Netid: `+Netid);
});