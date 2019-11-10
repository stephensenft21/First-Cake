import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import '../auth/Register.css'
import APIManager from '../../modules/APIManager'
import { Form, FormGroup, Button, Input} from 'reactstrap';
import {RegisterCard} from '../material/MaterialCards'
class Register extends Component {
    // Set initial state
    state = {
        email: "",
        username: "",
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        APIManager.searchUsername(this.state.username)
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
                    this.props.history.push("/home");
                }
            })
    }

    render() {
        return (
            <>
          
               <div className="mainContainer">
                   <RegisterCard
                    handleLogin={this.handleLogin}
                    handleFieldChange={this.handleFieldChange}  
                  
                    {...this.props} />

               <button type="button" onClick={() => { this.props.history.push(`/home/`) }}>Go Back</button>
                <Form className="registerForm" onSubmit={this.handleLogin}>
                    <div>Sign up</div>
                    <FormGroup row>
                     
                            <Input className="registerEmailForm" onChange={this.handleFieldChange} type="email" name="email" id="email" placeholder="Email" bsSize="lg" />
                       
                    </FormGroup>
                    <FormGroup row>
                       
                            
                            <Input className="registerUserNameForm" onChange={props.handleFieldChange} type="username" name="username" id="username" placeholder="username" bsSize="lg" />
                    
                    </FormGroup>
                    <FormGroup row>

                        
                           
                            <Input className="registerPasswordForm" onChange={props.handleFieldChange} type="password" name="password" id="password" placeholder="Password" />
                     
                        <Button type="submit">
                            Register
          </Button>
                    </FormGroup>
                </Form>
                </div>
            </>
        )
    }
}

export default withRouter(Register);

