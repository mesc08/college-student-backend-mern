const mongoose = require('mongoose')

const college = require('./colleges')

const StudentSchema = new mongoose.Schema({
	student_no : {
		type : String,
		required: true
	},
	name : {
		type: String,
		required: true
	},
	batch_year: {
		type: String,
		required: true,
	},
	college_id: {
		type: Number,
		ref : "college",
		required: true,
	},
	skills:
		{
			type: [String],
			required: true,
		},
});

module.exports = mongoose.model("students", StudentSchema);