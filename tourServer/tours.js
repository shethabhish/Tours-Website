var express = require('express');
const session= require('express-session');
// tconst bcrypt = require('bcryptjs');
const DataStore = require('nedb-promises');
const db = new DataStore({filename: __dirname + '/toursDB', autoload: true});
const tours = require('./Tours.json');
var express = require('express');
var app = express();
port = 1120;
host = '127.73.73.11'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});

const cookieName = "uh3536"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
   secret: 'This is secret key brought to you by Gayatri!',
   resave: false,
   saveUninitialized: false,
   name: cookieName, // Sets the name of the cookie used by the session middleware
}));

const setUpSessionMiddleware = function (req, res, next) {
   console.log(`session object: ${JSON.stringify(req.session)}`);
   console.log(`session id: ${req.session.id}`);
   if (!req.session.user) {
       req.session.user = {role: "guest"};
   };
    next();
};

const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};
app.get('/tours' ,function(req, res) {

    db.find().then((docs)=>{
      console.log(`We found ${docs.length} documents`);
      console.log(docs);
      res.json(docs);
      });
  });

app.post('/addTour', checkAdminMiddleware, express.json(), function (req, res) {
    var body = req.body;
    tours.insert(body, function(newDocs) {

      if(err)
      {
        console.log(`Error`);
        console.log(err);
      } else {

        console.log(`Added ${newDocs.length} docs`);
      } 

   });
});
app.use(setUpSessionMiddleware);
