import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Rating from 'material-ui-rating';
import EditIcon from '@material-ui/icons/Edit';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import 'typeface-roboto';
const useStyles = makeStyles(theme => ({
  button: {
      display: "flex",
    flexWrap: 'nowrap | wrap | wrap-reverse',
   
    marginLeft: theme.spacing(10) ,
    marginBottom: "10%",
    width: "45%",
    borderRadius: "4%",
    backgroundColor: ("#ACC18A"),
    color: ("black"),
    boxShadow: ("5px 5px 5px grey "),
    transitionDuration: ".3s",
 
  },
  button2:{
    display: "flex",
    marginTop: "2%",
    marginLeft: theme.spacing(1),
    marginBottom: "4%",
    width: "15%",
    borderRadius: "4%",
    backgroundColor: ("#F2FBE0"),
    color: ("black"),
    boxShadow: ("5px 5px 5px grey"),
    transitionDuration: ".3s",

  }, 
  button3:{
    display: "flex",
    marginTop: "25%",
    marginLeft: theme.spacing(1),
    marginBottom: "4%",
    width: "25%",
    borderRadius: "2%",
    backgroundColor: ("white"),
    color: ("black"),
    boxShadow: ("3px 3px 3px grey"),
    transitionDuration: ".3s",

  },
//Sign in Button
  button4:{
    display: "flex",
    marginTop: "25%",
    marginLeft: theme.spacing(1),
    marginBottom: "4%",
    width: "100%",
    borderRadius: "5%",
    color: "white",
    boxShadow: ("5px 5px 5px grey"),
    transitionDuration: ".3s",
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,

  },
  button5:{
    display: "flex",
    marginTop: "50%",
    marginLeft: theme.spacing(1),
    marginBottom: "4%",
    width: "",
    borderRadius: "5%",
    color: "black",
    boxShadow: ("5px 5px 5px grey"),
    transitionDuration: ".3s",
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,

  },
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47'
  }
  
}));







const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  
  function getLabelText(value) {
    return `${value} Heart${value !== 1 ? 's' : ''}`;
  }
  
   function CustomizedRatings() {
    return (
      <div>
        
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Custom icon and color</Typography>
          <StyledRating
            name="customized-color"
            value={2}
            getLabelText={getLabelText}
            precision={0.5}
            max={5}

            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
      
      </div>
    );
  } 


  //Button Hooks

 function IconButtonsDelete() {
  const classes = useStyles()
  
  return (
    <div >
      <IconButton className={classes.button2} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      
    </div>


  );
}





function IconButtonsEdit() {
  let classes = useStyles()
  
  return (
    <div className={classes}>
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
        <IconButton size="small"  type="button" className={classes.button} aria-label="edit">
       View Details
        </IconButton>
        
      </div>
    );
  } 


  function IconButtonsFavorite() {
    let classes = useStyles()
    
    return (
      <div>
        <IconButton   type="button"  className={classes.button2} aria-label="edit">
        <FavoriteIcon/>
        </IconButton>
        
      </div>
    );
  } 


  function IconButtonsBack() {
    const classes = useStyles()
    
    return (
      <div >
        <IconButton className={classes.button5} aria-label="delete">
        <ExitToAppOutlinedIcon/>
        </IconButton>
        
      </div>
  
  
    );
  }


  function IconButtonsSignIn(props) {
    const classes = useStyles()
    
    return (
      <div >
        <IconButton  type="submit" color="primary" className={classes.button4} aria-label="delete">
        <Typography variant="h5" color="textSecondary" component="p"><PersonRoundedIcon/>>> </Typography>
        </IconButton>
        
      </div>
  
  
    );
  }

  function IconButtonsSignUp(props) {
    const classes = useStyles()
    
    return (
      <div >
        <IconButton type="submit" color="primary" className={classes.button4} aria-label="delete">
        <Typography variant="h5"color="textSecondary" component="p"><PersonRoundedIcon/>>></Typography>
        </IconButton>
        
      </div>
  
  
    );
  }

  function IconButtonsComment(props) {
    const classes = useStyles()
    
    return (
      <div >
        <IconButton type="submit" color="primary" className={classes.button4  } aria-label="delete">
        <Typography variant="h5"color="textSecondary" component="p"> <RateReviewIcon/> </Typography>
        </IconButton>
        
      </div>
  
  
    );
  }
  function IconButtonsEditComment(props) {
    const classes = useStyles()
    
    return (
      <div >
        <IconButton type="submit" color="primary" className={classes.button4} aria-label="delete">
        <Typography variant="h5"color="textSecondary" component="p"><EditRoundedIcon/></Typography>
        </IconButton>
        
      </div>
    )}

function IconButtonsSubmit(props) {
  const classes = useStyles()
  
  return (
    <div >
      <IconButton type="submit" color="primary" className={classes.button4} aria-label="delete">
      <Typography variant="h5"color="textSecondary" value={this.props.text} component="p"></Typography>
      </IconButton>
      
    </div>
  
  
    );
  }







export default IconButtonsDelete

export { 

    IconButtonsEdit,
    IconButtonsDetails,
    IconButtonsFavorite,
    CustomizedRatings,
    getLabelText,
    IconButtonsBack,
    IconButtonsSignIn,
    IconButtonsSignUp,
    IconButtonsComment,
    IconButtonsEditComment,
    IconButtonsSubmit,

}