
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