const http = require('http');
const fs = require('fs');
const { error, log } = require('console');

const PersonalServer = http.createServer((req , res) =>{

    fs.appendFile('UserLog.txt', log, (err, data ) =>{
    res.end("hi iam server")
    const log = `${Date.now()}: new user log`;


    } )

});

    // console.log('incomming request ');
    // console.log(req.headers); 


PersonalServer.listen(3000, () => console.log('server initalize'));
