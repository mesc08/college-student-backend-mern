import {useEffect, useState} from 'react';
import axios from 'axios';

const ChartStudents=()=>{
	const [datas, setdata] = useState();
	useEffect(()=>{
    axios.get('http://localhost:4000/charts/students/skills')
      .then(res=>{
      	console.log(res);
      })
  	})
	return (
		<div>
			<h1> Hello Srijan </h1>
		</div>
		);
}

export default ChartStudents;