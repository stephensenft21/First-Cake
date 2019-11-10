import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { borderRadius } from '@material-ui/system';
import EditIcon from '@material-ui/icons/Edit';
import DetailsIcon from '@material-ui/icons/Details';
const useStyles = makeStyles(theme => ({
  button: {
    display: "flex",
    displayFlex: "row",
    margin: theme.spacing(1),
    width: "10%",
    borderRadius: "25%",
    backgroundColor: ("white"),
    color: ("black"),
    border: ("s"),
    boxShadow: ("5px 5px 5px black"),
    transitionDuration: ".3s",
 
  },
  button2:{
    display: "flex",
    margin: theme.spacing(1),
    width: "10%",
    borderRadius: borderRadius("2%"),
    backgroundColor: ("#F39898"),
    color: ("black"),
    border: ("s"),
    boxShadow: ("5px 5px 5px black"),
    transitionDuration: ".3s",

  }
 
  
}));

 function IconButtonsDelete() {
  const classes = useStyles()
  
  return (
    <div className={classes.button.display.displayFlex}>
      <IconButton  type="button" className={classes.button} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      
    </div>


  );
}





function IconButtonsEdit() {
  let classes = useStyles()
  
  return (
    <div>
      <IconButton  type="button" className={classes.button2} aria-label="edit">
      <EditIcon/>
      </IconButton>
      
    </div>
  );
} 




function IconButtonsDetails() {
    let classes = useStyles()
    
    return (
      <div>
        <IconButton  type="button" className={classes.button} aria-label="edit">
        <DetailsIcon/>
        </IconButton>
        
      </div>
    );
  } 


  function IconButtonsFavorite() {
    let classes = useStyles()
    
    return (
      <div>
        <IconButton   type="button"  className={classes.button2} aria-label="edit">
        <DetailsIcon/>
        </IconButton>
        
      </div>
    );
  } 






export default IconButtonsDelete

export { 

    IconButtonsEdit,
    IconButtonsDetails,
    IconButtonsFavorite 




}