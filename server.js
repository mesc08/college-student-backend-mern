const dotenv = require('dotenv')

const express = require('express')

const mongoose = require('mongoose')

const detailsRoutes = require('./routes/api')

const app = express();

dotenv.config({path : './config.env'})

mongoose.connect(process.env.DATABASE_URI, {
	useNewUrlParser: true, 
	useUnifiedTopology: true,
	useCreateIndex : true,
	}, (err)=>{
		if(!err){
			console.log('Mongodb connected .')
		}	
		else{
			console.log('The error is there')
		}
})



app.use("/", detailsRoutes)

const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server run at port ${PORT}`))