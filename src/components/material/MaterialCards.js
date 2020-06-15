import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import LocationCitySharpIcon from "@material-ui/icons/LocationCitySharp";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import { IconButtonsEditComment} from '../material/MaterialButtons'
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import IconButtonsDelete, {
  IconButtonsDetails,
  IconButtonsSignUp
} from "../material/MaterialButtons";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";
import TextField from "@material-ui/core/TextField";
import style from "../../Style";
import { IconButtonsSignIn } from "../material/MaterialButtons";
import { IconButtonsComment } from '../material/MaterialButtons'
const useStyles = makeStyles({
  card: {
    maxWidth: "345px"
    //maxHeight: "50%"
  },
  media: {
    height: 140
  }
});


  function MediaCard(props) {

    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <div onClick={() => props.handleDelete(props.favorite.id)}>
          <IconButtonsDelete />
        </div>
        <CardActionArea>
          <CardContent>
            <Typography align="left" gutterBottom variant="h4" component="h2">
              {`${props.favorite.name}`}
            </Typography>
            <LocationCitySharpIcon />{" "}
            <Typography
              align="justify"
              variant="subtitle2"
              color="textPrimary"
              component="p"
            >
              {`${props.favorite.address}`}
            </Typography>
            <Typography
              align="justify"
              variant="subtitle2"
              color="textPrimary"
              component="p"
            >
              {`${props.favorite.city}`}
            </Typography>
            <PhoneSharpIcon />
            <Typography
              align="justify"
              variant="subtitle2"
              color="textPrimary"
            component="p"
          >
            {`${props.favorite.phone_numbers}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/favorites/${props.favorite.id}`}>
        <IconButtonsDetails />
      </Link>
    </Card>
  );
}
 

function LoginCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            align="justify"
            variant="subtitle2"
            color="textPrimary"
            component="div"
          >
            <TextField
              style={style.emailInput}
              onChange={props.handleFieldChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              autoFocus
            />
          </Typography>
          <Typography
            align="justify"
            variant="subtitle2"
            color="textPrimary"
            component="div"
          >
            <TextField
              style={style.passwordInput}
              onChange={props.handleFieldChange}
              type="password"
              name="password"
              id="passwords"
              placeholder="Password*"
              autoFocus
            />
          </Typography>
          <Typography
            align="justify"
            variant="subtitle2"
            color="primary"
            component="div"

          >
            <div style={style.loginButton}>
              <IconButtonsSignIn />
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function RegisterCard(props) {
  const classes = useStyles();
  //className="registerForm"
  //className="registerEmailForm"
  //className="registerUserNameForm"
  //className="registerPasswordForm"
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            align="justify"
            variant="subtitle2"
            color="textPrimary"
            component="div"
          >
            <TextField
              style={style.emailInput}
              onChange={props.handleFieldChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              autoFocus
            />
          </Typography>

          <Typography
            align="justify"
            variant="subtitle2"
            color="textPrimary"
            component="div"
          >
            <TextField
              style={style.passwordInput}
              onChange={props.handleFieldChange}
              type="password"
              name="password"
              id="passwords"
              placeholder="Password*"
              autoFocus
            />
          </Typography>
          <Typography
            align="justify"
            variant="subtitle2"
            color="primary"
            component="div"
          >
            <div style={style.loginButton}>
              <IconButtonsSignUp />
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function MaterialCommentForm(props) {
  const classes = useStyles();

  return (
    <>


      <Typography
        align="justify"
        variant="overline"
        color="textPrimary"
        component="div"
      >
        {/* Add new comment... */}
      </Typography>

      <Typography
        align="justify"
        variant="overline"
        color="textPrimary"
        component="div"
      >

        <TextField
          style={style.passwordInput}
          onChange={props.handleFieldChange}
          type="text"
          name="comment"
          id="text"
          placeholder="Write a comment..."


        />

      </Typography>
      <Typography
        align="justify"
        variant="overline"
        color="primary"
        component="div"
      ></Typography>
      <div>
        <IconButtonsComment />
      </div>

    </>
  );
}


function MaterialEditForm(props) {
  const classes = useStyles();

  return (
    <>

<Box
        boxShadow={1}
        bgcolor="background.paper"
        m={5}
        p={5}
        style={{ width: '8rem', height: '5rem' }}
      >
       
      
      <Typography
        align="justify"
        variant="overline"
        color="textPrimary"
        component="div"
      >
        {/* Add new comment... */}
      </Typography>

      <Typography
        align="justify"
        variant="overline"
        color="textPrimary"
        component="div"
      >

        <TextField
          style={style.passwordInput}
          onChange={props.handleFieldChange}
          type="text"
          name="text"
          id="text"
          placeholder="Edit a comment..."


        />

      </Typography>
      <Typography
        align="justify"
        variant="overline"
        color="primary"
        component="div"
      ></Typography>
      </Box>
      <div>
        <IconButtonsEditComment />
      </div>
      
    </>
  )
  }



  function SearchCardMaterialUI(props) {

    const classes = useStyles();

    return (
      <Box
      boxShadow={3}
      bgcolor="background.paper"
      m={5}
      p={5}
     
    >
      <Card className={classes.card}>
      
        <CardActionArea>
          <CardContent>
            <Typography align="left" gutterBottom variant="h4" component="h2">
              {`${props.restaurant.name}`}
            </Typography>
            <LocationCitySharpIcon />{" "}
            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            >
              {props.restaurant.location.address}
            </Typography>
            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            >
              {`City:${props.restaurant.location.city}`}
            </Typography>
            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p">
            <MonetizationOnRoundedIcon/></Typography> 
            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            >
            {`Cost for Two: $${props.restaurant.average_cost_for_two}`} 
            </Typography>

            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            >
             {`${props.restaurant.user_rating.aggregate_rating}`} 
            </Typography>
            <ThumbUpAltRoundedIcon/>
            <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            >
             {`Other user votes: ${props.restaurant.user_rating.votes}`}
            </Typography>
            <PhoneSharpIcon/> 
              <Typography
              align="left "
              variant="body1"
              color="textPrimary"
              component="p"
            > 
                    {`${props.restaurant.phone_numbers}`}
            </Typography>

            <Typography
              align="left "
              variant="body1"
              color=" "
              component="p"
            >
     
            </Typography>
           
          </CardContent>
        </CardActionArea>
         
      </Card>
      </Box>
    );
  }
  function UserLoggedINSearchCardMaterialUI(props) {

    const classes = useStyles();

    return (
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
      <Card className={classes.card}>
        
        <CardActionArea>
          <CardContent>
            <Typography align="left" gutterBottom variant="body1" component="h2">
              {`${props.restaurant.name}`}
            </Typography>
            <LocationCitySharpIcon />
            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
              {props.restaurant.location.address}
            </Typography>
            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
              {`City:${props.restaurant.location.city}`}
            </Typography>
            <MonetizationOnRoundedIcon/>
            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
            {`Cost for Two:   $${props.restaurant.average_cost_for_two}`} 
            </Typography>

            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
              {`${props.restaurant.user_rating.aggregate_rating}`} 
            </Typography>

            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
             {`Other user votes: ${props.restaurant.user_rating.votes}`}
            </Typography>
            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
              {`Phone#:${props.restaurant.phone_numbers}`}
            </Typography>
            <Typography
              align="left "
              variant="h5"
              color="textPrimary"
              component="p"
            >
              
            </Typography>
           
          </CardContent>
        </CardActionArea>
          <Link to={`/register/`}>
               Would You Like to Access All App Features? click (Here) to Register
        </Link>
      </Card>
      </Box>
    );
  }
  function UserLoggedINSearchCardWithDetailsMaterialUI(props) {
  
    const classes = useStyles();

    return (
      
      <Card className={classes.card}>
        
        <CardActionArea>
          <CardContent> 
            <Typography align="inherit" gutterBottom variant="body1" component="h5">
              {`${props.favorite.name}`}
            </Typography>
              <LocationCitySharpIcon />
            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
              
            <Divider/>
              {props.favorite.address}
            </Typography>
            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
              {`City:${props.favorite.city}`}
            </Typography>
            <MonetizationOnRoundedIcon/>
            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
            {`Cost for Two:   $${props.favorite.average_cost_for_two}`} 
            </Typography>

            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
              {`${props.favorite.rating}`} 
            </Typography>

            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
             {`Other user votes: ${props.favorite.votes}`}
            </Typography>
            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
              {`Phone#:${props.favorite.phone_numbers}`}
            </Typography>
            <Typography
              align="inherit "
              variant= "h6"
              color="textPrimary"
              component="p"
            >
              
            </Typography>
           
          </CardContent>
        </CardActionArea>
         
      </Card>
   
    );
  }




export { UserLoggedINSearchCardWithDetailsMaterialUI,LoginCard, MediaCard, RegisterCard, MaterialCommentForm, MaterialEditForm, SearchCardMaterialUI,UserLoggedINSearchCardMaterialUI };
