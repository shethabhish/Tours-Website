const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const fs = require('fs');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const Datastore = require('nedb-promises');
let tourDB = new Datastore({ filename: './toursDB', autoload: true });
let usersDB = new Datastore({ filename: './usersDB', autoload: true });
var users = fs.readFileSync('../tourServer/userTourHash.json');



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cookieName = "np6987toursid";
app.use(session({
  secret: 'Gayatri',
  resave: false,
  saveUninitialized: false,
  name: cookieName
}));

const setUpSessionMiddleware = function (req, res, next) {
  if (!req.session.user) {
    req.session.user = { role: 'guest' };
  }
  next();
}

app.use(setUpSessionMiddleware);

var getTours = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var toursData = await tourDB.find({});
  console.log(`${JSON.stringify(toursData)}`);
  console.log(`${JSON.stringify(toursData.length)}`);
  res.json(toursData);
}

var getNumberOfTours = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var toursData = await tourDB.find({});
  var toursCount = `${JSON.stringify(toursData.length)}`;

 res.json(toursCount);
}

var addTours = async function (req, res) {
   
    let tour = req.body;
       
    await tourDB.insert(tour);
       
    let tours = await tourDB.find({});
    res.json(tours);
       
}

var doLogin = async function (req, res) {
  console.log("inside login");
  var loginData = req.body;
  var email = loginData.email;
  var password = loginData.password;
    console.log(password);
  var errorData = {
    "error": true,
    "message": "User/Password error"
  };
  var user;
  if (typeof (email) != "undefined" && typeof (password) != "undefined") {
    let user = usersDB.find(function (user) {
        return user.email === email
    });
    if (!user) {

      res.json(JSON.stringify(errorData));
    }
    else {
      console.log("else");
        console.log(usersDB.password);
     
        if( email =="sided1830@outlook.com"){
                console.log("inside");
                req.session.user = {role: "admin"};
            } else{
                req.session.user = {role: "guest"};
            }
        var oldUserInfo = req.session.user;
        req.session.regenerate(function (err) {
          if (err) {
              console.log("if err");
            console.log(err);
          }
       
          let newUserInfo = Object.assign(oldUserInfo, user);
          delete newUserInfo.password;
          req.session.user = newUserInfo;
          console.log("Changing session.user when login : ", req.session.user);
           
          res.json(newUserInfo);
        });
    }
  }
  else {
    resData = "Bad login data : StatusCodeError: 401 - " + JSON.stringify(errorData);
  }
}

var doLogout = function (req, res) {
  let options = req.session.cookie;
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie(cookieName, options);
    res.json({ message: 'GoodBye' });
  });
}

var checkAdmin = function (req, res, next) {
  var err = { "error": "Not Permitted" };
    console.log("Role:::::::");
    console.log(req.session.user.role);
  if (req.session.user.role !== "admin") {
    var errString = "StatusCodeError: 401 - " + JSON.stringify(err);
    res.json(errString);
  }
  else {
    next();
  }
}

var checkCustomer = function (req, res, next) {
  var err = { "error": "Not Permitted" };
  if (req.session.user.role !== 'customer') {
    var errString = "StatusCodeError: 401 - " + JSON.stringify(err);
    res.json(errString);
  }
  else {
    next();
  }
}

app.get('/tours', getTours);
app.get('/count/tour', getNumberOfTours);
app.post('/tours/add',checkAdmin, express.json(), addTours);
app.post('/login', express.json(), doLogin);
app.get('/logout', doLogout);


host = '127.72.0.13';
port = '1234';
app.listen(port, host, function () {
  console.log(`TourServer listening on IPv4: ${host}:${port}`);
});