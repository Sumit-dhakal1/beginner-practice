const http = require('http');
const fs = require('fs');
const { error, log } = require('console');

// const PersonalServer = http.createServer((req , res) =>{
//     const log = `${Date.now()} ${req.url}: new user log \n`;

//     fs.appendFile('Log.txt', log, (err , data) => {
// const con = (req.url)
//         if('/contact') {
//             console.log('connect with us')
//         }

//         else('/project')
//             console.log('200+project')
        

//     res.end("hi iam server")


//     } )

// });

//     // console.log('incomming request ');
//     // console.log(req.headers); 


// PersonalServer.listen(3000, () => console.log('server initalize'));

fs.writeFileSync('systeminfo.txt', 'hello this is the authorized resellar of apple')