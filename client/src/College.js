import {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table, Button} from 'antd';

const columns = [
  {
    title: 'college no',
    dataIndex: 'college_no',
    key : 'college_no'
  },
  {
    title: 'Name',
    dataIndex : 'name',
    key : 'name'
  },
  {
    title: 'Year Founded',
    dataIndex : 'year_founded',
    key : 'year_founded'
  },
  {
    title: 'City',
    dataIndex : 'city',
    key : 'city'
  },
  {
    title : 'State',
    dataIndex : 'state',
    key : 'state'
  },
  {
    title : 'Country',
    dataIndex : 'country',
    key : 'country'
  },
  {
    title: 'Students',
    dataIndex : 'students_enrolled',
    key : 'students_enrolled'
  },
  {
    title : 'Courses',
    dataIndex : 'courses',
    key : 'courses'
  },
  {
    title: 'Students-Info',
    key : 'action',
    render: (college_no)=>
      <Button type="primary"> Check Students</Button>,
  }
];

const College=()=> {
  const [college, setcollege] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/colleges')
      .then(res=>{
          setcollege(res.data);
      })
  })
  return (
    <div>
      <div>
        <Table dataSource={college} columns={columns} />;
      </div>
    </div>
  );
}

export default College;