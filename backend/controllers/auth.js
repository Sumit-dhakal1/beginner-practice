const user = require('../models/UserModel')
const bcrypt = require("bcrypt")

export const createUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				message: "invalid password"
			});
		}

		const existingUser = await user.findOne({ email });

		if (existingUser) {
			return res.status(409).json({
				status: false,
				message: "user already exist"
			});

		}


	}
};