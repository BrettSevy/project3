const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
	findAll: function(req, res) {
		db.User.find(req.query)
			.sort({ name: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.User.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create: async function(req, res) {
		const { firstName, lastName, email, password } = req.body;
		try {
			console.log("user not ready");
			let user = await db.User.findOne({ email });
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}
			user = {
				firstName,
				lastName,
				email,
				password
			};
			// Store hash in your password DB.
			const salt = await bcrypt.genSalt(13);
			user.password = await bcrypt.hash(password, salt);
			console.log("user almost created!");
			db.User.create(user)
				.then(dbModel => res.json(dbModel))
				.catch(err => res.status(422).json(err));
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	},

	login: async function(req, res) {
		const { email, password } = req.body;
		try {
			let user = await db.User.findOne({ email: email });
			if (!user) {
				return (
					res
						// .status(400)
						.json({ errors: [{ msg: "Invalid Credentials" }] })
				);
			}
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}
			res.json(user);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	},

	update: function(req, res) {
		db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.User.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
