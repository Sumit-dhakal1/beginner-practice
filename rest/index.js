// const express = require("express");
// const fs = require('fs');
// const { type } = require("os");
// const userRouter = require('./routes/users');
// const { logReqRes } = require("./middlewares")


// const app = express();
// const PORT = 8000;



// // middleware or certain plugins to parse the request body

// app.use(express.urlencoded({ extended: true }));

// app.use(logReqRes("log.txt"));
// app.use ("/users", userRouter);



// app.listen(PORT, () => console.log(`server is running`));


const obj1 = {
	name : 'sumit dhakal',
	age : 44
};

const obj2  = {
	name : 'nikesh shah',
	age : 22
};

const obj3 = {
	...obj1,...obj2
};

console.log("this is merging", obj3);

