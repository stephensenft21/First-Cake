import React from 'react';
import style from '../../Style'
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import { makeStyles } from '@material-ui/core/styles'; 

 export default function MaterialButton(){
  return (
    <Button style={style.loginButton} type='submit' variant="contained" color="primary">
      Sign in
    </Button>
  );
}
// const useStyles = makeStyles(theme => ({
//     fab: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
//   }));

// export function FloatingActionButtons() {
//     const classes = useStyles();
  
//     return (
//       <div>
       
//         <Fab  aria-label="like" className={classes.fab}>
//           <FavoriteIcon />
//         </Fab>
//       </div>
//     );
//   }
  