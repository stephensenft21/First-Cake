import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import '../auth/Register.css'
import APIManager from '../../modules/APIManager'
import { Col, Form, FormGroup, Button, Input} from 'reactstrap';
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
                    this.props.history.push("/");
                }
            })
    }

    render() {
        return (
            <>
               <div className="mainContainer">
                <Form className="registerForm" onSubmit={this.handleLogin}>
                    <div>Sign up</div>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input onChange={this.handleFieldChange} type="email" name="email" id="email" placeholder="Email" bsSize="lg" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input onChange={this.handleFieldChange} type="username" name="username" id="username" placeholder="username" bsSize="lg" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>

                        <Col sm={10}>
                            <Input onChange={this.handleFieldChange} type="password" name="password" id="password" placeholder="Password" />
                        </Col>
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

