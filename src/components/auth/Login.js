import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";
import { Form, FormGroup, Button} from 'reactstrap';
import '../auth/Login.css'
import style from '../../Style'
import MatButton from '../style/SpringHooks'
import { makeStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
  import '../../index.css'
  
  import {MdArrowBack } from "react-icons/md";  

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
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    // let credentials = { 
    //   username: this.state.username, 
    //   password: this.state.password }
   
    APIManager.searchEmail(this.state.email)
      .then(result => {
         if (this.state.email === ''|| this.state.password ==="") {
            window.alert('please fill out fields');
        } else
        console.log("what is the result of search", result)
        if (result.length > 0) {
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
     <Button style={style}type="button" onClick={() => { this.props.history.goBack(`/home/`) }}> <MdArrowBack/></Button>
     <div><button style={style.logoButton} type="button" onClick={() => { this.props.history.push(`/home/`) }}></button></div>
      <Form style={style.Form}  onSubmit={this.handleLogin}>
        <div style={style.signInText}>Sign In</div>
      <FormGroup row>
       
          <TextField style={(style.emailInput)} onChange={this.handleFieldChange} type="email" name="email" id="email" placeholder="Email" />
      
      </FormGroup>
     
      <FormGroup row>
       
        
       <TextField style={style.passwordInput}  onChange={this.handleFieldChange}type="password" name="password" id="passwords" placeholder="Password" />
        
         <MatButton  style={(style.loginButton)}  >Sign in </MatButton>

      </FormGroup>
    </Form>
    </div>
    
    </>
    )
  }
}

export default withRouter(Login);
