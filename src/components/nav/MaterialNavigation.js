import React from 'react';
import { Link, withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
 import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {HomeIcon} from '@material-ui/icons/Home';
import {InfoIcon} from '@material-ui/icons/Info';
// import Icon from '@material-ui/icons/Icon';
const useStyles = makeStyles({
  root: {
    width: 413,   
  },
});
 const isAuthenticated = () => sessionStorage.getItem("credentials") !== null
 function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
   const logout = () => {
      sessionStorage.removeItem("credentials")
     
    }

  return (

     <>

        {isAuthenticated()? (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    <Link className="nav-link" to="/home"><BottomNavigationAction showLabel={true} label="Home" icons={<HomeIcon/>} /></Link>
       <Link className="nav-link" to="/favorites"><BottomNavigationAction showLabel={true} label="Favorites" icons={<FavoriteIcon/>}/></Link>
       <Link className="nav-link" to="/about"><BottomNavigationAction showLabel={true} label="About" icons={<InfoIcon/>} />  </Link>                                    
       <Link className="nav-link" onClick={logout} to="/"><BottomNavigationAction showLabel={true } label="Logout" icons={<ExitToAppIcon/>} /></Link>
       </BottomNavigation>
    
       ) : (
         <>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link className="nav-link" to="/home"> <BottomNavigationAction showLabel={true} label="Home" icons={<HomeIcon/>} /></Link>
       <Link className="nav-link" to="/about"><BottomNavigationAction showLabel={true} label="About" icons={<InfoIcon/>} />  </Link>                                    
    </BottomNavigation>
     </>
        )}        
    </>
  );
} export default withRouter(SimpleBottomNavigation)