1. TASK 1 Create a Set of Random Data in The form of JSON file.
	1.1 Create College Data with following Schema.
		- ID Numbers
		- Name College Name
		- Year Founded Year
		- City String
		- State String
		- Country String
		- No of students
		- Courses[Computer Science , Electronics, Information Technology]
		
	1.2 Create Student Data with following Schema.
		- ID Numbers
		- Name String
		- Year of Batch
		- College ID 
		- Skills [C++, Java, C ...etc]
		
	```
	1. 	Used Random Data to Create Students.json and Colleges.json.
	2. Students.json contains 1000 data.
	3. Colleges.json contains 100 data.
	4. Each college contains 100 students.
	```
	
	`mongod.exe --dbpath c:\data\db`
2. Imported the json data to mongodb compass

3. Nodejs and connect