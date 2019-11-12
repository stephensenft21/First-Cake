import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Fondue from '../../Images/Fondue.jpg';
import Sushi from '../../Images/Sushi.jpg'
import BarFood from "../../Images/BarFood.jpg"
import IceCream from '../../Images/IceCream.jpg'
import Donuts  from '../../Images/Donuts.jpg'
import Drink  from '../../Images/Drinks.jpg'
import Juice from '../../Images/Juice.jpg'
import PubFood from '../../Images/PubFood.jpg'
import Bakery from '../../Images/Bakery.jpg'
import Cafe from '../../Images/Cafe1.jpg'
import Dessert from '../../Images/Desserts.jpg'
import Pizza from '../../Images/Pizza.jpg'
// import LoginLogo from "../../Images/AuthLogo-Login.jpg"
// import RegisterLogo from "../../Images/AuthLogo-Register.jpg"
const useStyles = makeStyles(theme => ({

   
  root: {
  display: 'flex',
  height: "10%",
  width: "25px",
  flexWrap: 'wrap',
  flexDirection: "row",
  alignContent: 'flex-start',
  
   
  },
  second: {
    width: '25%',
    margin: 0,
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '50% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

    
  
    
   
    
    
    
     function PizzaButton(props) {
      const classes = useStyles();
    
      return (
        
    
            <ButtonBase
    
              focusRipple
              key={1}
              className={(classes.image)}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "23%",
              }}  
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${Pizza})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {props.text}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          
       
      );
    }
    
     function PubFoodButton(props) {
      const classes = useStyles();
    
      return (
        
    
            <ButtonBase
    
              focusRipple
              key={1}
              className={(classes.image)}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: "23%",
              }}  
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${PubFood})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {props.text}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          
       
      );
    }

 function DonutsButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Donuts})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function BakeryButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Bakery})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function IceCreamButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${IceCream})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function JuiceButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Juice})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function BarFoodButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${BarFood})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function  CafeButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Cafe})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function DessertsButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Dessert})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function SushiButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Sushi})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
 function FondueButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Fondue})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
function DrinkButton(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${Drink})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}

function AuthMaterialButton1(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${""})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
  )}
function AuthMaterialButton2(props) {
  const classes = useStyles();

  return (
    

        <ButtonBase

          focusRipple
          key={1}
          className={(classes.image)}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "23%",
          }}  
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${""})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.text}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      
   
  );
}
export {
  DessertsButton,
  BarFoodButton,
  SushiButton,
  JuiceButton,
  FondueButton,
  CafeButton,
  IceCreamButton,
  PizzaButton,
  PubFoodButton,
  BakeryButton,
  DonutsButton,
  DrinkButton,
  AuthMaterialButton1,
  AuthMaterialButton2
  
}