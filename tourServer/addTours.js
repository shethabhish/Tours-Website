/* Testing the POST /tours/add API */
const rp = require('request-promise-native');

let cookiejar = rp.jar(); // Use this to store cookies in between sessions.

let addTour = {
    uri: 'http://127.0.0.1:3434/addTour',
    json: true,
    method: "POST",
    body: {
        name: "Windsurf K2-18b, 110 Light Years",
        date: "Sometime in 2025"
    },
    jar: true
};

let loginOptions = {
    uri: 'http://127.0.0.1:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "antisun1921@outlook.com",
        "password": "R.r<E&xt"
    },
    jar: true
}

let loginCust = {
    uri: 'http://127.0.0.1:3434/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "stedhorses1903@yahoo.com",
        "password": "nMQs)5Vi"
    },
    jar: true
}

async function someTests() {
    console.log("Try adding tour without logging in");
    try {
        let res1 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(response)}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as admin, then adding tour")
    try {
        let res2 = await rp(loginOptions);
        console.log(`login results: ${JSON.stringify(res2)}`);
        //console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
        let res3 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(res3)}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }

    console.log("Login as customer, then try adding tour")
    try {
        let res4 = await rp(loginCust);
        console.log(`login results: ${JSON.stringify(res4)}`);
        //console.log(`Cookie: ${JSON.stringify(cookiejar.cookies)}`);
        let res5 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(res5)}\n`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
}

someTests();

