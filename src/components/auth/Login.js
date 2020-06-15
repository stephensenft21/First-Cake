import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";
import { Form } from 'reactstrap';
import '../auth/Login.css'
import style from '../../Style'
import  {IconButtonsBack} from '../material/MaterialButtons'
import '../../index.css'
import {LoginCard} from '../material/MaterialCards'
// import {Link} from 'react-router-dom'
// import Typography from '@material-ui/core/Typography';

class Login extends Component {
  // Set initial state  
  state = {
    email: "",
    passwords: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    

    APIManager.searchEmail(this.state.email)
      .then(result => {
        if (this.state.email === '' || this.state.password === "") {
          window.alert('please fill out fields');
        } else if (result.length > 0) {
          //this returns an array - we only need object
          this.props.setUser(result[0]);
          this.props.history.push("/home");
        }
      })
  }


  render() {
    return (
      <>
        <div style={style.mainContainer}>
        <div  onClick={() => { this.props.history.goBack(`/home/`) }}> <IconButtonsBack/></div>
          
        <img src={require(`../../Images/Project-Logo-Capstone.png`)} alt="My Logo" style={style.logoButton} onClick={() => { this.props.history.push(`/home/`) }}></img>
          <Form style={style.Form} onSubmit={this.handleLogin}>
            <div style={style.signInText}>Sign In</div>
          

             

            
            <LoginCard
        
        handleLogin={this.handleLogin}
        handleFieldChange={this.handleFieldChange}  
      
        {...this.props} />
     
           

          
          </Form>
     
        </div>

      </>
    )
  }
}

export default withRouter(Login);


/* <Typography variant="body2" color="textSecondary" align="center">
{'Copyright © '}
<Link color="inherit" to="https://https://github.com/stephensenft21/c35-React-Capstone-First-Cake-/blob/master/README.md">
  First Cake
</Link>{' '}
{new Date().getFullYear()}
{'.'}
</Typography> */