const mongoose = require('mongoose');
const Users = require('../../rest/models/users');


const UserSchema = mongoose.UserSchema(
	{
		email: {
			type: String,
			require: true,
			unique: true,
			lowercase: true,

		},

		password: {
			type: String,
			require: true,
			unique: true,
			lovercase: true,
			uppercase: true,
			Number: true,
		}
	}

);

const user = mongoose.model.user("user", UserSchema)

module.exports = Users;

