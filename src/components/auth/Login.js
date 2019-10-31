import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";
import { Col, Form, FormGroup, Button, Input } from 'reactstrap';
import '../auth/Login.css'
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
   
    APIManager.searchUsername(this.state.email)
      .then(result => {
        console.log("what is the result of search", result)
        if (result.length > 0) {
          //this returns an array - we only need object
          this.props.setUser(result[0]);
          this.props.history.push("/");
        } 
      })
  }

  render() {
    return (
      <> 
     <div className="mainContainer">
      <Form className='loginForm'  onSubmit={this.handleLogin}>
        <div className="signInText">SignIn</div>
      <FormGroup row>
       
          <Input className="emailInput"  onChange={this.handleFieldChange} type="email" name="email" id="email" placeholder="Username" bsSize="lg" />
      
      </FormGroup>
      <FormGroup row>
       
        
          <Input  className="passwordInput" onChange={this.handleFieldChange}type="password" name="password" id="passwords" placeholder="Password" />
        
        <Button className="loginButton" type="submit">
            Sign in
          </Button>
      </FormGroup>
    </Form>
    </div>
    
    </>
    )
  }
}

export default withRouter(Login);
