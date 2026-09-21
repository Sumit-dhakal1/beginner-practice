const { default: mongoose } = require("mongoose");

async function connectMongoDb() {

	mongoose.connect('mongodb://127.0.0.1:27017/rest-api') 
.then (() => console.log('mongo DB connected'))
.catch ((err) => console.log ('mongo error', err));
 

}

