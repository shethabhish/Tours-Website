const rp = require('request-promise-native');
const cookieJar = rp.jar();
let tourSite = {
    url: 'http://127.73.73.12:1120/login',
    json: true,
    jar: cookieJar
};

rp(tourSite).then(function(data){
    // data.forEach(function(tour, i) {
    //     console.log(`Login Test ${i+1} name ${tour.name}, date: ${tour.date}`);
    // });
    console.log(`Login Test 1: Good Login`);
    console.log(`cookies: ${cookieJar.getCookieString(tourSite.url)}`);
}).catch(function(err){
    console.log(`Error: ${err}`);
})
