# Homework #8 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

(a) Confidentiality:

(i) In the context of information security, confidentiality refers to the protection of information from being accessed by other people who aren’t authorized. Only the people authorized should have access to the corresponding information.

(ii) A recent event where confidentiality was lost was reported by Prisma Health midlands. They announced that private patient information was leaked, including social security numbers, bank credentials and birthdays after an employee account was compromised.

(iii) Another name for loss of confidentiality is “Breach”.

(b) Integrity:

(i) The integrity of a software downloaded from the internet might be an issue if there is no authenticity of the information, i.e if the provided information is not genuine. In such case integrity is lost because there can be alterations to the information you needed and you didn't know it. 

(ii) Some of the common measures taken to ensure integrity of open source software’s are:
Frequent updates, to change or check if the code has been altered.
Treat everything as codes including payment methods, so they cannot be easily accessible
Frequent coverity scans to check for alterations of code.

(c) Availability:

(i) The name of a network based attack that results in loss of availability is called denial-of-service.

(ii) Yes, a WIFI jammer can be an attack on availability as it will lead to denial of WIFI service.

# Question 2

(a)Authentication:

(i) Credential stuffing is an automated injection of breached username and password pairs in order to get access to user accounts. 
Users shouldn’t have same passwords for two different websites because it easy acces the other website once you know the password of one. 
You should be concerned about authorizations if there are any highly valuable information in your accounts that you don’t want to share with others.
I have been pwned on 7 breach websites with one of my email and none in the other two.

(b)Authentication(multi-factor):

(i) A two factor authentication is where you have to verify your identity twice before gaining access to you accounts.

(ii) The U.S bank website has two factor authentication. In the first factor you have to enter your username and password and in the second you have to answer the security question that you had set when creating the account.

(iii) It is not 100% hack proof, but is better than 1 step authentication.

(c)   Authorization:

(i) Authorization systems used in computer systems, applications or company are Oracle Entitlement server. Cloud access manager, Transmit security.

(ii) RBAC is defined as Role Based access control, it’s idea is to give permissions to users based on their role of the organization.

(d) Accounting:

Its is important to keep logs of various activities associated with your web app so that only new information can be written as old record, data cannot be rewritten or deleted. Log files also help you differentiate the changes from past log and also can be helpful for error detection.

# Question 3

(a) 

![3a](images/1.png)

	const fs = require('fs');
	const bcrypt = require('bcryptjs');
	let users = require('./usersTours.json');
	let nRounds = 13;
	let hashedUsers = [];
	let start = new Date(); // timing code
	console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);
	for (var i = 0; i < users.length; i++) {



	// Hashing a password prior to storage
	let salt = bcrypt.genSaltSync(13); // New salt everytime!
	let passHash = bcrypt.hashSync(users[i].password, salt);
	users[i].password = passHash;
	}
	hashedUsers = users;
	let elapsed = new Date() - start; // timing code
	console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
	fs.writeFileSync("userTourHash.json", JSON.stringify(hashedUsers, null, 2)); 
 
 (b) 

![3b](images/2.PNG)

# Question 4

	var express = require('express');
	var app = express();
	port = 2626;
	host = '125.02.26.98'; // Any loopback address
	app.listen(port, host, function () {
	  console.log(`Example app listening on IPv4: ${host}:${port}`);
	});
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
	                    } else {
	                        res.send(`Bad password Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
	                    }
	                }
	            }
	    res.send(`Bad email Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
	});


# Question 5
	const rp = require('request-promise-native');
	function logData(userData) {    
		console.log(`${userData}`);}
	async function login() {    
		let pairs = {       
		 method: 'POST',        
		 url: 'http://localhost:1326/login',        
		 body: {"email": "aaabbbcc@xyzz.com", "password": "abshdbds'"},        
		 json: true    
		};
		rp(pairs).then(logData).catch(function(msg){
			        console.log(`Error: ${msg}`);        
		})

	    pairs = {            
		method: 'POST',
		url: 'http://localhost:1326/login',            
		body: {"email": "gadapar@fhdshfd.com", "password": "fsdfef'"},            
		json: true        
	};    
	rp(pairs).then(logData).catch(function(msg){            
		console.log(`Error: ${msg}`);            
	})
	    pairs = {                
		method: 'POST',                
		url: 'http://localhost:1326/login',                
		body: {"email": "eqwwqr@hot.com", "password": "bfdfffard"},                
		json: true            
	};    
	rp(pairs).then(logData).catch(function(msg){                
		console.log(`Error: ${msg}`);                
	})
	}
	login();

