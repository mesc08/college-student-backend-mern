import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
	root : {
		flexGrow: 1,
	},
	title : {
		flexGrow : 1,
	},
}));
const Navigation =()=>{
	const classes = useStyles();
	return (
		<div className = {classes.root}>
			<AppBar position="static">
				<Toolbar>
          		<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            		<MenuIcon />
          		</IconButton>
          		<Typography variant="h6" className={classes.title}>
            		<Link exact to="/" style={{ color: '#FFF' }}>Colleges</Link>
          		</Typography>
          		<Typography variant="h6" className={classes.title}>
            		<NavLink exact activeClassName="active" style={{ color: '#FFF' }} to="/students">Students</NavLink>
          		</Typography>
          		<Typography variant="h6" className={classes.title}>
            		<NavLink exact activeClassName="active" to="/chartstudents" style={{ color: '#FFF' }}>ChartStudents</NavLink>
          		</Typography>
          		<Typography variant="h6" className={classes.title}>
            		<NavLink exact activeClassName="active" to="/chartcolleges" style={{ color: '#FFF' }}>ChartColleges</NavLink>
          		</Typography>
          		</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navigation;