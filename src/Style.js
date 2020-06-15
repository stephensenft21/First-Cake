export default {
  //This is a style sheet for my app.

  /*

        ! mainContainer Style
       
        */

       wrapper:{
        marginTop: "48px; ",/* place it under navbar */
        height: '100vh',
        overflow: 'scroll',
        paddingBottom: "50%;", /* compensate margin top */
        backGround: '#E9B5B5',
    },
  mainContainer: {
    display: "flex",
    width: 413,
    height: 736,
    background: " #717C89",
    backdropFilter: "blur(4px)"
  },
  editMainContainer: {
    display: "flex",
    width: 413,
    height: 736,
    color: " #717C89",
    backdropFilter: "blur(4px)"
  },

  mainBody: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "75",
  },

  cardContainer: {


  },

  mainCard: {

  },
  /*

        ! Form Style
       
        */

  Form: {
    
    position: "absolute",
    left: "4.84%",
    right: "4.84%",
    top: "41.03%",
    bottom: "23.37%",
    borderRadius: "5px"
  },

  /*

        *   Login Component Start
       

        ! First Cake Logo Button Style
       
        */
  logoButton: {
    borderRadius: '50%',
    marginLeft: "30%",
    width: 175,
    height: 183,
    display: 'flex',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundPositionX: '219%',
  },
    logoButtonLoginView: {
    borderRadius: '50%',
    marginRight: "0   %",
    width: 275,
    height: 183,
    display: 'flex',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundPositionX: '219%',

  },
  logoButtonEditView: {
    borderRadius: ' ',
    paddingBottom: "1000em",
    width: "100%",
    height: "50%",
    display: 'flex',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
   
    backgroundColor: "#acc18a "

  },


  clearInputButton:{
    backgroundColor: 'Transparent',


  },



  backButton:{

  },

  /*
  

   ! Login Button
  
   */


  loginButton: {
    position: "absolute",
    left: "32.65%",
    right: "37.79%",
    top: "68.02%",
    bottom: "15.79%",
 
    width: 122.1,
    height: 50,
    fontFamily: "Goudy Bookletter 1911",
    fontWeight: "normal",

    fontSize: 20,
    backgroundPositionX: 25,
    backgroundPositionY: 8,
    /* identical to box height */

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    
  },

  /*

        ! Email Input Style
       
        */

  emailInput: {
    position: "absolute",
    left: "15.98%",
    right: "22.84%",
    top: "19.84%",
    bottom: "62.75%",
    width: 252.68,
    height: 43,

    boxSizing: "border-box",
    borderRadius: 5,
    backgroundPositionY: 49,
    backgroundPositionX: 66,
    fontFamily: 'Goudy Bookletter 1911',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 50,
    lineHeight: "140.62%",
    /* or 25px */
    color: "rgba(0, 0, 0, 0.5)"
  },

  /*

    !   Password Input Style
     
      */
  passwordInput: {
    position: "absolute",
    left: "15.98%",
    right: "22.84%",
    top: "44.13%",
    bottom: "38.46%",
    width: 252.68,
    height: 43,
    fontFamily: "Goudy Bookletter 1911",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: "140.62%",
    /* or 25px */
    color: "rgba(0, 0, 0, 0.5)"
  },

  /*

      !  Sign In Text Style
     
      */

  signInText: {

    position: "absolute",
    left: "34.87%",
    right: "41.89%",
    top: "0%",
    bottom: "80.16%",

    fontFamily: "Goudy Bookletter 1911",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 26,
    /* identical to box height */

    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    textAlign: "center",

    color: "rgba(0, 0, 0, 0.75)"
  },
  CommentLabels: {

    marginTop:"20px",
    left: "34.87%",
    right: "41.89%",
    top: "0%",
    bottom: "80.16%",

    fontFamily: "Goudy Bookletter 1911",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 26,
    /* identical to box height */

    display: "flex",
    flexDirection: "row",
    alignContent: "space-around",
    textAlign: "center",

    color: "#ACC18A"
  },



  /*
* Auth Button Component


! Authorization Link Button Style
     
      */
  authButtonsRight: {
    position: 'absolute',
    left: '72.64%',
    right: '2.91%',
    top: '0.68%',
    bottom: '95.11%',

  },

  authButtonsLeft: {
    position: 'absolute',
    left: '2.91%',
    right: '72.64%',
    top: '0.54%',
    bottom: '95.24%',


  },

  logobutton:{


  },

authButtongroup: {
  display: 'flex',
  flexDirection: "",
  justifyContent: '',
},

favoriteDetails:{
  BackgroundColor: "#ACC18A",

}


  
  



  
  /*
  * Register Component Start
  ! Register Button Style
  
  */
}