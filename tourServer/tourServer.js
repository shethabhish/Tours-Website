var express = require('express');
var app = express();
port = 1120;
host = '127.73.73.12'; // Any loopback address
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
let loginData = require('./usersTours.json')
// const bcrypt = require('bcryptjs');
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


                        let oldInfo = req.session.user;
                        req.session.regenerate(function (err) {
                          if (err) {console.log(err);}
                        let newUserInfo = Object.assign(oldInfo, errorMessage);
                        // delete newUserInfo.passHash;
                        req.session.user = newUserInfo;
                        res.json(newUserInfo);
                    });
                    }
                    else {
                        res.send(`Bad password Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
                    }
                }
            }
    res.send(`Bad email Login error: StatusCodeError: 401 = ${JSON.stringify(errorMessage)}`)
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});