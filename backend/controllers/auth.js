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

		const hashedpassword = await bcrypt.hash(password, 10);

		const user = await user.create({
			email,
			password: hashedpassword, 
		});

		return res.status(201).json({
			status: true,
			message: 'user create sucessfully ',
			user: {
				id : user._id,
				email: user.email,

			},						
		});


	}catch(error) {
		next(error);
	}
};

export const getUsers = async( req, res, next) =>{
	try{
		const users = await user.find().select ("-password");

		return res.status(200).json ({
			status : true,
			message : 'user featch sucessfully',
			users,
		});
	} catch (error) {
		next (error);
	}
};

