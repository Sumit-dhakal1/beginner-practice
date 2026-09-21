const express = require("express");
const fs = require('fs');
const { type } = require("os");
const userRouter = require('./routes/users');
const { logReqRes } = require("./middlewares")


const app = express();
const PORT = 8000;



// middleware or certain plugins to parse the request body

app.use(express.urlencoded({ extended: true }));

app.use(logReqRes("log.txt"));
app.use ("/users", userRouter);



app.listen(PORT, () => console.log(`server is running`));
