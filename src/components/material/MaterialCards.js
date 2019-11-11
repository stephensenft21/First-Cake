import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import LocationCitySharpIcon from "@material-ui/icons/LocationCitySharp";
import Typography from "@material-ui/core/Typography";
import IconButtonsEditComment from '../material/MaterialButtons'
import IconButtonsDelete, {
  IconButtonsDetails,
  IconButtonsSignUp
} from "../material/MaterialButtons";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";
import TextField from "@material-ui/core/TextField";
import style from "../../Style";
import { IconButtonsSignIn } from "../material/MaterialButtons";
import {IconButtonsComment} from '../material/MaterialButtons'
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
  console.log("this is in media card", props)
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
            variant="overline"
            color="textPrimary"
            component="p"
          >
            {`${props.favorite.address}`}
          </Typography>
          <Typography
            align="justify"
            variant="overline"
            color="textPrimary"
            component="p"
          >
            {`${props.favorite.city}`}
          </Typography>
          <PhoneSharpIcon />
          <Typography
            align="justify"
            variant="overline"
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
export default MediaCard;

function LoginCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            align="justify"
            variant="overline"
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
            variant="overline"
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
            variant="overline"
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
            variant="overline"
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
            variant="overline"
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
            variant="overline"
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
          <IconButtonsComment/>
            </div>
               
    </>
  );
  }


  function MaterialEditForm(props) {
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
                name="text"
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
           <IconButtonsEditComment/>
              </div>
                 
      </>
    )


}

export { LoginCard, RegisterCard, MaterialCommentForm, MaterialEditForm};
