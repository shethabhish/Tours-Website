const express = require('express');
let app = express(); 
const session = require('express-session');
const bcrypt = require('bcryptjs');

const Datastore = require('nedb-promises');
let datastore = Datastore.create(__dirname + '/toursDB');


const cookieName = "TourSid"; 
app.use(session({
  secret: 'website development CSUEB',
  resave: false,
  saveUninitialized: false,
  name: cookieName 
}));

const users = require('./userTourHash.json');
const tours = require('./tours.json');


function setUpSessionMiddleware(req, res, next) {
  if (!req.session.user) {
    req.session.user = {role: "guest"};
  };
  next();
};

app.use(setUpSessionMiddleware);

function checkCustomerMiddleware(req, res, next) {
  if (req.session.user.role === "guest") {
    res.status(401).json({error: "Not permitted"});;
  } else {
    next();
  }
};


var adminCondition = function (req, res, next) {
  var err = { "error": "Not Permitted" };
  if (req.session.user.role != "admin") {
    var errString = "StatusCodeError: 401 - " + JSON.stringify(err);
    res.status(401).json(errString);
  }
  else {
    next();
  }
}

app.get('/tour', async function (req, res) {
  try {
    let tours = await datastore.find({});
        res.json(tours);
  } catch (e) {
    console.log(`error: ${e}`);
  }
});  

app.get('/tour/:tourId', async function (req,res){
    let tours = await datastore.find({});
    let auser = await tours.find(function (tour) {
    return tour._id === req.params.tourId
  });
    if (!auser) {// Not found
    res.status(401).json({error: true, message: "User/Password error"});
    return;
  } else{
        return res.status(200).json({
                     Name: "Tours single",
                     Date: "A single student record",
               });
    }
    
});

app.post('/addTours', adminCondition, express.json(), async function (req, res) {
    
  try {
        let tour = req.body;
        console.log(tour);
        await datastore.insert(tour);
        
        let tours = await datastore.find({});
        res.json(tours);
        
  } catch (e) {
    console.log(`error: ${e}`);
        res.status(500).json({error:"error with add Tour"});
  }
    
});

app.post('/deleteTours',adminCondition, express.json(), async function (req, res) {
  try {
        let temp = req.body;
        await datastore.remove({"_id":temp.id});
    let tours = await datastore.find({});
        res.json(tours);
        
  } catch (e) {
    console.log(`error: ${e}`);
        res.status(500).json({error:"error with add Tour"});
  }
    
});

app.use('/addTours', function(req, res, next) {
    next();
});


app.post('/login', express.json(), async function (req, res) {
  var requestBody = req.body;
  var email = requestBody.email;
  var password = requestBody.password;
  var errorData = {
    "error": true,
    "message": "User/Password error"
  };
  console.log(`Session id ${res.session}`);
  var user;
    let auser;
  if (typeof (email) != "undefined" && typeof (password) != "undefined") {
      auser = users.find(function (user) {
        return user.email === email
    });
      
    if (!auser) {
        res.status(401).json({error: true, message: "User/Password error"});
        return;
    }
    else {
    if( email =="sided1830@outlook.com"){
        req.session.user = {role: "admin"};
      } else{
        req.session.user = {role: "guest"};
      }
        var oldUserInfo = req.session.user;
        req.session.regenerate(function (err) {
          if (err) {
            console.log(err);
          }
    
          let newUserInfo = Object.assign(oldUserInfo, auser);
          delete newUserInfo.password;
          req.session.user = newUserInfo;
          res.json(newUserInfo);
        });
  }
  }
  else {
    resData = "Bad login data : StatusCodeError: 401 - " + JSON.stringify(errorData);
  }
    
});

app.get('/count/tour', async function (req, res){
        res.setHeader('Content-Type', 'application/json');
        var toursData = await datastore.find({});
        var toursCount = `${JSON.stringify(toursData.length)}`;
        res.json(toursCount);
});

app.get('/logout', function (req, res) {
  let options = req.session.cookie;
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie(cookieName, options); 
    res.json({message: "Goodbye"});
  })
});


module.exports = app;

