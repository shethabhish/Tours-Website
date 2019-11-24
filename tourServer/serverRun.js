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