const app = require('./tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');
const chai = require('chai');
const db = require('./tourDBinit.js');
let agent = request.agent(app); //Use across many requests

describe('Get Tour Tests', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tour');
	})
	it('Everything is OK', async function(){
		assert.equal(response.status, 200);
	});
	it('Returns an array', function(){
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function(){
		
			tours.forEach((tour)=>{assert.containsAllKeys(tour, ['Name', 'Date'])});
		});
	
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('TourSid'));
		assert.notEmpty(mycookie);
	});
})


describe('Get an Individual Tour', function () {
	let response;
    let resp;
	let tours = null;
    const arr = [];
	before(async function(){
        resp = await request(app).get('/tour');
        tours = JSON.parse(resp.text);
        for(var i=0;i<2;i++){
            arr.push(tours[i]._id);
        }  
	})
    
	it('Get an existing Tour', async function(){
         console.log('Trying Path');
         response = await request(app).get(`/tour/${arr[0]}`);
		 assert.equal(response.status, 200);
	});
    it('Get another existing Tour', async function(){
         console.log('Trying Path');
         response = await request(app).get(`/tour/${arr[1]}`);
		 assert.equal(response.status, 200);
	});
    
    it('Try getting a non-existant Tour', async function(){
         console.log('Trying Path');
         response = await request(app).get(`/tour/xzLSq1mZCchYhKdLJH`);
		 assert.equal(response.status, 401);
	});
});

describe('Add Tour Tests', function() {
        let response1, response2, response3,agent;
        
		before(async function(){
			//   db();
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

describe('Delete Tour Tests', function() {
        let response1, response2, response3,agent;
        
		before(async function(){
			//   db();
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