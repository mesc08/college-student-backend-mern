const express = require('express')

const main = require('../main/contant')

const router = express.Router()

router.get('/colleges', async (req, res)=> {
	try{
		let resAllcolleges = await main.searchAllColleges();
		res.json(resAllcolleges);
	}
	catch(err){
		res.status(500);
	}
});

router.get('/students', async (req, res)=>{
	try{
		let resAllStudents = await main.searchAllStudents();
		res.json(resAllStudents)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/students/:id', async(req, res)=>{
	try{
		let resAStudent = await main.searchAStudentByID(req.params.id);
		res.json(resAStudent)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/colleges/:id', async (req, res)=>{
	try{
		let resACollege = await main.searchACollegeByID(req.params.id);
		res.json(resACollege)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/colleges/students/:collegeid', async (req, res)=>{
	try{
		let resAllStudentsBelongtoSameCollege = await main.searchStudentsBelongtoSameCollege(req.params.collegeid)
		res.json(resAllStudentsBelongtoSameCollege)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/colleges/state/:state', async (req, res)=>{
	try {
		let resAllcollegesofSameState = await main.searchAllCollegesofSameState(req.params.state)
		res.json(resAllcollegesofSameState)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/colleges/state/:state/:city', async (req, res)=>{
	try{
		let resAllCollegesinSameCity = await main.searchAllCollegesByLocation(req.params);
		res.json(resAllCollegesinSameCity)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/colleges/courses/:courses', async (req, res)=>{
	try{
		let resAllCollegesoffersamecourse = await main.searchAllCollegesBySameCourses(req.params.courses)
		res.json(resAllCollegesoffersamecourse)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/students/skills/:skills', async (req, res)=>{
	try{
		let resAllStudentssamecourse = await main.searchAllStudentswithSameSkills(req.params.skills)
		res.json(resAllStudentssamecourse)
	}
	catch(err){
		res.status(500)
	}
})

module.exports = router;