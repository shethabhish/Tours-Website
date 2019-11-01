var express = require('express');
const bcrypt = require('bcryptjs');
var app = express();
port = 2126;
host = '122.26.28.26';
app.listen(port, host, function () {
 console.log(`Example app listening on IPv4: ${host}:${port}`);
});
let loginData = require('./userTourHash.json')
app.post('/login',express.json(),function(req,res)
   {
            let arrayOfUser = {};
            let email = req.body.email;
            let password = req.body.password;
            let errorMessage = {"error": true, "message": "User/Password error"};
            for(let i=0; i< loginData.length; i++) {
                if(loginData[i].email == email) {
                    let verified = bcrypt.compareSync(password, loginData[i].password);
                    if(verified) {
                        arrayOfUser.firstName = loginData[i].firstName;
                        arrayOfUser.lastName = loginData[i].lastName;
                        arrayOfUser.email = loginData[i].email;
                        arrayOfUser.role = loginData[i].role;
                        res.send(`Good login Test result: ${JSON.stringify(arrayOfUser)}`)
                    } else {
                        res.send(`Bad password Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
                    }
                }
            }
    res.send(`Bad email Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
});