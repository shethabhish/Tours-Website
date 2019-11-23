const DataStore = require('nedb-promises');
const db = new DataStore({filename: __dirname + '/userDB', autoload: true});
const users = require('./usersTours.json');
var express = require('express');
var app = express();
port = 1120;
host = '127.73.73.12'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});

app.get('/tours' ,function(err, docs) {

db.find().then((docs)=>{
console.log(`We found ${docs.length} documents`);
console.log(docs);
res.json(docs);
});
});




