# Homework #10 Solution

**Sai Shethabhish Naidu Palla**

**NetID: xq4954**

# Question 1

 (a) See all tours

url : http://127.72.0.13:1234/tours

method : GET

return codes: 200 code for Success, 401 code for Failure

role : user

## (b) Get info on a specific tour

url : http://127.72.0.13:1234/tours/Some_random_data

method : GET

return codes: 200 code for Success, 401 code for Failure

role : user

## (c) Add a new tour

url : http://127.72.0.13:1234/tours/add

method : POST

return codes: 200 code for Success, 401 code for Failure

roles : user

## (d) Edit a tour

url : http://127.72.0.13:1234/tours/edit/Some_random_data

method : PUT

return codes: 200 code for Success, 401 code for Failure

role : user

## (e) Delete a tour

url : http://127.72.0.13:1234/tours/delete/Some_random_data

method : DELETE

return codes: 200 code for Success, 401 code for Failure

role : user

# Question 2

(a) GET /tours/{toursId}

(b) POST /tours/{toursId}/login/{loginId}

(c) DELETE /user/{userId}

(d) GET /user/{userId}/tours/{toursId}

# Question 3

(a)
	npm install --global mocha
	npm i chai
	npm i supertest



	const express = require('express');
	const app1 = express();
	const app = require('./tourServer'); // Import server
	const host = '127.26.28.02 ';
	const port = '1234';
	app1.listen(port, host, function () {
	   console.log("Tour JSON session server listening on IPv4: " + host +
	       ":" + port);
	});

(b)

			const app = require('./tourServer');
			const assert = require('chai').assert;
			const request = require('supertest');
			const cookie = require('cookie');
			const chai = require('chai');
			let agent = request.agent(app); //Use across many requests
			describe('Get Tour Tests', function () {
			let response;
			let tours = null;
			before(async function(){
			response = await request(app).get('/tours');
			})
			it('Everything is OK', async function(){
			assert.equal(response.status, 200);
			});
			it('Returns an array', function(){
			tours = JSON.parse(response.text);
			assert.isArray(tours);
			});
			it('All tour elements have name and date', function(){
			tours.forEach(function(tour){
			assert.containsAllKeys(tour, ['Name', 'Date']);
			});
			});
			it('Cookie with appropriate name is returned', function(){
			let cookies = response.header['set-cookie'].map(cookie.parse);
			let mycookie = cookies.filter(c => c.hasOwnProperty('TourSid'));
			assert.notEmpty(mycookie);
			});
		})

![one](images/1.png)

(c)

	const assert = require('chai').assert;
	const request = require('supertest');
	const cookie = require('cookie');
	const app = require('./tourServer'); // Import server
	const host = '127.72.72.11';
	const port = '3434';
	app.listen(port, host, function () {
	   console.log("Tour JSON session server listening on IPv4: " + host +
	       ":" + port);
	});

	describe('Login Tests', function () {
	   let response;
	   let tours = null;
	   let myCookie = null;
	   let agent = request.agent(app); //Use across many requests

	   before(async function(){
	       response = await agent.get('/tours');
	   })
	   it('Cookie with appropriate name is returned', function(){
       let cookies = response.header['set-cookie'].map(cookie.parse);
       cookies= cookies.filter(c => c.hasOwnProperty('TourSid'));
        assert.notEmpty(cookies);
        myCookie = cookies[0];
    });
    describe('Login Sequence', function() {
        before(async function(){
            response = await agent.post('/login')
                .send({"email": "stedhorses1903@yahoo.com", "password": "nMQs)5Vi"});
        });
        it('Login Good', function(){
            assert.equal(response.status, 200);
        });
        it('User returned', function(){
            let user = JSON.parse(response.text);
            assert.containsAllKeys(user, ['firstName', 'lastName', 'role']);
        });
        it('Cookie session ID changed', function () {
            let cookies = response.header['set-cookie'].map(cookie.parse);
            cookies = cookies.filter(c => c.hasOwnProperty('TourSid'));
            assert.notEmpty(cookies);
            assert.notEqual(cookies[0]['TourSid'], myCookie['TourSid']);
        });
    });
    describe('Bad Logins', function(){
        it('Bad Email', async function(){
            response = await agent.post('/login')
                .send({"email": "Bstedhorses1903@yahoo.com",    "password": "nMQs)5Vi"});
            assert.equal(response.status, 401);
        });
        it('Bad Password', async function(){
            response = await agent.post('/login')
                .send({"email": "stedhorses1903@yahoo.com", "password": "BnMQs)5Vi"});
            assert.equal(response.status, 401);
        });
    })
})

![two](images/2.png)

# Question 4

(a)

	app.get('/tour/:tourId', async function (req,res){
	   let tours = await datastore.find({});
	   let auser = await tours.find(function (tour) {
	   return tour._id === req.params.tourId
	 });
	   if (!auser) {
	   res.status(401).json({error: true, message: "User/Password error"});
	   return;
	 } else{
	       return res.status(200).json({
	                    Name: "Tours single",
	                    Date: "A single student record",
	              });
	   }
	});

![ss](images/3.png)

(b)

![ss](images/4.png)

# Question 5

(a)

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

	describe('Add Tour Tests', function() {
	       let response1, response2, response3,agent;
	       

	before(async function(){
	 db();
	});
	           
	           After(async function(){
	 db();
	});
	         
	       
	it('Admin trying to add Tour', async function(){
	agent = request.agent(app);
	           response1 = await agent.post('/login').send({ "email": "sided1830@outlook.com",
	   "password": "C}m8\"L,F"});
	           assert.equal(response1.status,200);
	           response1 = await agent.post('/addTours').send({"Name": "qwert",
	             "Date": "Starting May 2020"});
	            assert.equal(response1.status,200);
	            await agent.get('/logout')
	           
	           });

	it('Customer trying to add Tour', async function(){
	agent = request.agent(app);
	response1 = await agent.post('/login').send({"email": "ox1815@live.com","password": "h$$gCf{'"});
	           assert.equal(response1.status,200);
	           response1 = await agent.post('/addTours').send({"Name": "qwert","Date": "Starting May 2020"});
	            assert.equal(response1.status,401);
	            await agent.get('/logout')
	           
	           });
	   
	       it('Guest try to add Tour', async function(){
	           
	           
	           
	           response2 = await agent.post('/addTours').send({
	             "Name": "qwert",
	             "Date": "Starting May 2020"
	           });
	assert(response2.status, 401);
	});
	   });

![ss](images/5.png)

(b)

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


	describe('Delete Tour Tests', function() {
	       let response1, response2, response3,agent;
	       

	before(async function(){
	 db();
	});
	         
	          After(async function(){
	 db();
	});
	it('Admin trying to Delete Tour', async function(){
	agent = request.agent(app);
	           response1 = await agent.post('/login').send({ "email": "sided1830@outlook.com",
	   "password": "C}m8\"L,F"});
	           assert.equal(response1.status,200);
	           response1 = await agent.post('/deleteTours').send({"id":"0IEMv0uvrPhcx5lx"});
	            assert.equal(response1.status,200);
	            await agent.get('/logout')
	           
	           });

	it('Customer trying to Delete Tour', async function(){
	agent = request.agent(app);
	response1 = await agent.post('/login').send({"email": "ox1815@live.com","password": "h$$gCf{'"});
	           assert.equal(response1.status,200);
	           response1 = await agent.post('/deleteTours').send({"Name": "qwert","Date": "Starting May 2020"});
	            assert.equal(response1.status,401);
	            await agent.get('/logout')
	           
	           });
	   
	       it('Guest try to Delete Tour', async function(){
	           
	           
	           
	           response2 = await agent.post('/deleteTours').send({
	             "Name": "qwert",
	             "Date": "Starting May 2020"
	           });
	assert(response2.status, 401);
	});
	   });

![ss](images/6.png)
