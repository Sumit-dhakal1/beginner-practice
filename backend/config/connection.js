const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017")
		console.log('database connect sucessfully');

	} catch (error) {
		console.log('mongoDB connect failed', error.message)
		process.exit(1);
	}
};


module.export = connectDB;
