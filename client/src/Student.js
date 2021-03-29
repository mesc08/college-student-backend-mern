import {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table} from 'antd';

const columns = [
  {
    title: 'Student No',
    dataIndex: 'students_no',
    key : 'students_no'
  },
  {
    title: 'Name',
    dataIndex : 'name',
    key : 'name'
  },
  {
    title: 'Batch Year',
    dataIndex : 'batch_year',
    key : 'batch_year'
  },
  {
    title: 'Skills',
    dataIndex : 'skills',
    key : 'skills'
  },
  {
    title : 'College Id',
    dataIndex : 'college_id',
    key : 'college_id'
  },
];
const Student=()=>{
	const [students, setstudents] = useState([]);

	useEffect(()=>{
		axios.get("http://localhost:4000/students")
		.then(res=>{
			setstudents(res.data);
		})
	})

	return (
		<div>
      	<div>
        	<Table dataSource={students} columns={columns} />;
      	</div>
    	</div>
		)
}

export default Student;