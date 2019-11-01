 const rp = require('request-promise-native');

function logData(data){
   console.log(`${data}`);
}

async function test(){
   var options = {
   method: 'POST',
   uri: 'http://127.89.35.76:3988/login',
   body: {"email": "ox1815@live.com",
    "password": "h$$gCf{'"},
           json: true
};
   rp(options).then(logData).catch(function(msg)
    {console.log(`Error: ${msg}` );
    })

   var options = {
   method: 'POST',
   uri: 'http://127.89.35.76:3988/login',
   body: {"email": "arienzo1954@yandex.com",
    "password": "AHZ*`sJl"},
           json: true
};
   rp(options).then(logData).catch(function(msg)
    {console.log(`Error: ${msg}` );
     })


   var options = {
   method: 'POST',
   uri: 'http://127.89.35.76:3988/login',
   body: {"email": "bouto2050@outlook.com", "password": "`$b5/_>K"},
           json: true
};
  rp(options).then(logData).catch(function(msg)
    {console.log(`Error: ${msg}` )
    ;})

}

test();
