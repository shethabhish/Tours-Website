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
	npm i assert<br />
	npm install --global mocha<br />
	npm i chai<br />
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