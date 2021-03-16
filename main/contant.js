const mongoose = require('mongoose')

const collegemodel = require('../models/colleges')

const studentmodel = require('../models/students')


const searchAllColleges=()=> {
	return new Promise((fulfill, reject)=>{
		collegemodel.find({'country': 'India'})
		.then((college)=>{
			fulfill(college)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchAllStudents =()=>{
	return new Promise((fulfill, reject)=>{
		studentmodel.find()
		.then((students)=>{
			fulfill(students)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchAStudentByID =(id)=>{
	return new Promise((fulfill, reject)=>{
		studentmodel.findById(id)
		.then((students)=>{
			fulfill(students)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchACollegeByID =(id)=>{
	return new Promise((fulfill, reject)=>{
		collegemodel.findById(id)
		.then((college)=>{
			fulfill(college)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchStudentsBelongtoSameCollege=(id)=>{
	return new Promise((fulfill, reject)=>{
		studentmodel.find({"college_id": parseInt(id)})
		.then((students)=>{
			fulfill(students)
		})
		.catch((err)=>{
			reject(err)
		})	
	})
}

const searchAllCollegesofSameState=(state)=>{
	return new Promise((fulfill, reject)=>{
		collegemodel.find({"state": state})
		.then((college)=>{
			fulfill(college)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchAllCollegesByLocation=(query)=>{
	return new Promise((fulfill, reject)=>{
		collegemodel.find({"state": query.state, "city" : query.city})
		.then((college)=>{
			fulfill(college)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}

const searchAllCollegesBySameCourses=(courses)=>{
	return new Promise((fulfill, reject)=>{
		collegemodel.find({'country': 'India'})
		.then((college)=>{
			newcollege = []
			for(var i = 0; i < college.length; i++){
				var obj = college[i];
				for(var key in obj){
					if(key == "courses" && obj[key].includes(courses)){
						newcollege.push(obj)
					}
				}
			}
			fulfill(newcollege)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}
const searchAllStudentswithSameSkills=(skills)=>{
	return new Promise((fulfill, reject)=>{
		studentmodel.find()
		.then((students)=>{
			newstudent = []
			for(var i = 0; i < students.length; i++){
				var obj = students[i];
				for(var key in obj){
					if(key == "skills" && obj[key].includes(skills)){
						newstudent.push(obj)
					}
				}
			}
			fulfill(newstudent)
		})
		.catch((err)=>{
			reject(err)
		})
	})
}
module.exports = {
	searchAllColleges,
	searchAllStudents,
	searchAStudentByID,
	searchACollegeByID,
	searchStudentsBelongtoSameCollege,
	searchAllCollegesofSameState,
	searchAllCollegesByLocation,
	searchAllCollegesBySameCourses,
	searchAllStudentswithSameSkills,
}