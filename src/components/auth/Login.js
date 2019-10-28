import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager";
import { Col, Form, FormGroup, Button, Input } from 'reactstrap';
class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: ""
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
    let credentials = { 
      email: this.state.email, 
      password: this.state.password }
   
    APIManager.searchUsername(this.state.email)
      .then(result => {
        console.log("what is the result of search", result)
        if (result.length > 0) {
          //this returns an array - we only need object
          this.props.setUser(result[0]);
          this.props.history.push("/");
        } else {
          APIManager.addUser(credentials)
            .then(result => {
              //this returns an object
              console.log("result is", result);
              this.props.setUser(result);
            })
          this.props.history.push("/");
        }
      })
  }

  render() {
    return (
      <> 
      
      <Form onSubmit={this.handleLogin}>
        <div>Sign In</div>
      <FormGroup row>
        <Col sm={10}>
          <Input  onChange={this.handleFieldChange} type="email" name="email" id="email" placeholder="Email" bsSize="lg" />
        </Col>
      </FormGroup>
      <FormGroup row>
       
        <Col sm={10}>
          <Input onChange={this.handleFieldChange}type="password" name="password" id="password" placeholder="Password" />
        </Col>
        <Button type="submit">
            Sign in
          </Button>
      </FormGroup>
    </Form>
    
    </>
    )
  }
}

export default withRouter(Login);

 // <form onSubmit={this.handleLogin}>
      //   <fieldset>
      //     <h3>Please sign in</h3>
      //     <div className="formgrid">
      //       <input onChange={this.handleFieldChange} type="email"
      //         id="email"
      //         placeholder="Email address"
      //         required="" autoFocus="" />
      //       <label htmlFor="inputEmail">Email address</label>

      //       <input onChange={this.handleFieldChange} type="password"
      //         id="password"
      //         placeholder="Password"
      //         required="" />
      //       <label htmlFor="inputPassword">Password</label>
      //     </div>
      //     <button type="submit">
      //       Sign in
      //       </button>
      //   </fieldset>
      // </form>
