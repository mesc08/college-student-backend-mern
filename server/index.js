const dotenv = require('dotenv')

const express = require('express')

const mongoose = require('mongoose')

const detailsRoutes = require('./routes/api')

const cors = require('cors')

const app = express();	

dotenv.config({path : './.env'})

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

app.use(cors())

app.use("/", detailsRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server run at port ${PORT}`))