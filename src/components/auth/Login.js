import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";
import { Form } from 'reactstrap';
import '../auth/Login.css'
import style from '../../Style'
import  {IconButtonsBack} from '../material/MaterialButtons'

import '../../index.css'

import {LoginCard} from '../material/MaterialCards'


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
        if (this.state.email === '' || this.state.password === "") {
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
        <div  onClick={() => { this.props.history.goBack(`/home/`) }}> <IconButtonsBack/></div>
          
          <div><button style={style.logoButton} type="button" onClick={() => { this.props.history.push(`/home/`) }}></button></div>
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
