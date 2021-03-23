const express = require('express')

const mongoose = require('mongoose')

const students = require('./students')

const CollegeSchema = mongoose.Schema({
	college_no : {
		type : Number,
		required: true,
	},
	name : {
		type: String,
		required: true
	},
	year_founded: {
		type: Number,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type : String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	students_enrolled: {
		type: Number,
		required: true,
	},
	courses: 
		{
			type: [String],
			required: true,
		},
});

module.exports = mongoose.model("colleges", CollegeSchema);