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

router.get('/charts/colleges/state', async (req, res)=>{
	try{
		let countofocollegesbystate = await main.searchforCountofAllCollegesBystate()
		const dataset = {"datasets": [], "labels": []}
		for(var i = 0; i < countofocollegesbystate.length; i++){
			dataset["datasets"].push(countofocollegesbystate[i]["count"])
			dataset["labels"].push(countofocollegesbystate[i]["_id"])
		}
		const data = {"datas":datasets}
		res.json(data)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/charts/colleges/courses', async (req, res)=>{
	try{
		let countofcoursesoffered = await main.searchforCountofCoursesByColleges()
		const dataset = {"datasets": [], "labels": []};
		for(var i = 0; i < countofcoursesoffered.length; i++){
			dataset["datasets"].push(countofcoursesoffered[i]["count"])
			dataset["labels"].push(countofcoursesoffered[i]["_id"])
		}
		const data ={"datas":datasets}
		res.json(data)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/charts/students/skills', async (req, res)=>{
	try{
		let countofskillsstudents = await main.searchforCountofSkillsByStudents()
		const dataset = {"datasets": [], "labels": []}
		for(var i = 0; i < countofskillsstudents.length; i++){
			dataset["datasets"].push(countofskillsstudents[i]["count"])
			dataset["labels"].push(countofskillsstudents[i]["_id"])
		}
		const data ={"datas":datasets}
		res.json(data)
	}
	catch(err){
		res.status(500)
	}
})

router.get('/charts/colleges/city', async (req, res)=>{
	try{
		let countofcollegesbycity = await main.searchforcountofCollegesbySameCity()
		const dataset = {"datasets": [], "labels": []}
		for(var i = 0; i < countofcollegesbycity.length; i++){
			dataset["datasets"].push(countofcollegesbycity[i]["count"])
			dataset["labels"].push(countofcollegesbycity[i]["_id"])
		}
		const data ={"datas":datasets}
		res.json(data)
	}
	catch(err){
		res.status(500)
	}
})
module.exports = router;