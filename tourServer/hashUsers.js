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