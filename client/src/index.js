import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Navigation from './Navigation';
import College from './College';
import Student from './Student';
import ChartStudents from './ChartStudents';
import ChartColleges from './ChartColleges';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Router>
	<Navigation />
	<div className ="main">
		<h1> Colleges and Students </h1>
	</div>
    <Switch>
    	<Route path="/" exact component={College} />
    	<Route path="/students" exact component={Student} />
    	<Route path="/chartstudents" exact component={ChartStudents} />
    	<Route path="/chartcolleges" exact component={ChartColleges} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
