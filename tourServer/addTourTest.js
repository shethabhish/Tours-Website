const rp = require('request-promise-native');
let options = {
uri: 'http://localhost:5677/Tour/add',
   
   method:"post",
   body:{"Name":"Earth mass","Date":"12-9-2020"},
json: true
};
rp(options).then(function(input){
console.log("Tour Data");
   for (var i=0;i<input.length;i++){
console.log("Name:"+input[i].Name+",Date: "+input[i].Date);

   }
}).catch(function(msg){
console.log(`Error: ${msg}`);
})