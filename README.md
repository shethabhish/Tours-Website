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

	*code*

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

