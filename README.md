# Homework #9 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

(a)<br />

	const DataStore = require('nedb-promises');
	const db = new DataStore({filename: __dirname + '/userDB', autoload: true});
	const users = require('./usersTours.json');

	async function initialize() { // so I can await!
	    try {
	        let numRemoved = await db.remove({}, {multi: true});
	        console.log(`Cleanup, removed ${numRemoved} Data`);
	        let newDocs = await db.insert(users);
	        console.log(`Added ${newDocs.length} Data`);
	    } catch (err) {
	        console.log(`Database error: ${err}`);
	    }
	}

	initialize(); // don't forget to run the async function

(b)<br />

	const DataStore = require('nedb-promises');
	const db = new DataStore({filename: __dirname + '/toursDB', autoload: true});
	const tours = require('./Tours.json');
	async function initialize() { // so I can await!
	   try {
	       let numRemoved = await db.remove({}, {multi: true});
	       console.log(`Cleanup, removed ${numRemoved} Data`);
	       let newDocs = await db.insert(tours);
	       console.log(`Added ${newDocs.length} Data`);
	   } catch (err) {
	       console.log(`Database error: ${err}`);
	   }
	}

	initialize();

# Question 2

(a)<br />

	app.get('/tours' ,function(req, res) {

	db.find().then((docs)=>{
	console.log(`We found ${docs.length} documents`);
	console.log(docs);
	res.json(docs);
	});
	});

(b)<br />

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

(c)<br />


# Question 3

(a)<br />
	code

	const cookieName = "xq4954"; // Session ID cookie name, use this to delete cookies too.
	app.use(session({
	  secret: 'This is secret key brought to you by Shethabhish!',
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

(b)<br />

![1](images/1.png)

(c)<br />

	app.post('/login',express.json(),function(req,res)

	       {
	           let arrayOfUser = {};
	           let email = req.body.email;
	           let password = req.body.password;

	           let errorMessage = {"error": true, "message": "User/Password error"};

	           for(let i=0; i< loginData.length; i++) {
	               if(loginData[i].email == email) {
	                   let verified = bcrypt.compareSync(password, loginData[i].password);
	                   if(verified) {
	                       arrayOfUser.firstName = loginData[i].firstName;
	                       arrayOfUser.lastName = loginData[i].lastName;
	                       arrayOfUser.email = loginData[i].email;
	                       arrayOfUser.role = loginData[i].role;
	                       res.send(`Good login Test result: ${JSON.stringify(arrayOfUser)}`)


	                       let oldInfo = req.session.user;
	                       req.session.regenerate(function (err) {
	                         if (err) {console.log(err);}
	                       let newUserInfo = Object.assign(oldInfo, errorMessage);
	                       // delete newUserInfo.passHash;
	                       req.session.user = newUserInfo;
	                       res.json(newUserInfo);
	                   });
	                   }
	                   else {
	                       res.send(`Bad password Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
	                   }
	               }
	           }
	   res.send(`Bad email Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
	  });

(d)<br />

	app.get('/logout', function (req, res) {
	   let options = req.session.cookie;
	   req.session.destroy(function (err) {
	       if (err) {
	           console.log(err);
	       }
	       res.clearCookie(cookieName, options); // the cookie name and options
	       res.json({message: "Goodbye"});
	   })
	});

