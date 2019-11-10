import React from 'react';
import { Link, withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
 import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

 function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
   const logout = () => {
    sessionStorage.removeItem("credentials")
   
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      
      className={classes.root}
    >
        <BottomNavigationAction label="Home" icons={HomeIcon} />
        <BottomNavigationAction label="Favorites" icons={FavoriteIcon}  />
     <BottomNavigationAction label="About" icons={InfoIcon} />                                      
       <BottomNavigationAction label="Logout" icons={ExitToAppIcon} />
  
    
    </BottomNavigation>
  );
} export default withRouter(SimpleBottomNavigation)