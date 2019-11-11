import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import '../auth/Register.css'
import APIManager from '../../modules/APIManager'
import { Form } from 'reactstrap';
import style from '../../Style'
import { RegisterCard } from '../material/MaterialCards'
import  {IconButtonsBack} from '../material/MaterialButtons'


class Register extends Component {
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
            password: this.state.password
        }

        APIManager.searchEmail(this.state.email)
            .then(result => {
              
                if (result.length > 0) {
                    //this returns an array - we only need object
                    this.props.setUser(result[0]);
                    this.props.history.push("/");
                } else {
                    APIManager.addUser(credentials)
                        .then(result => {
                            //this returns an object
                         
                            this.props.setUser(result);
                        })
                    this.props.history.push("/home");
                }
            })
    }

    render() {
        return (
            <>

                <div style={style.mainContainer}>


                    <div onClick={() => { this.props.history.goBack(`/home/`) }}><IconButtonsBack/></div>
                    <div><button style={style.logoButton} type="button" onClick={() => { this.props.history.push(`/home/`) }}></button></div>
                    <Form style={style.Form} onSubmit={this.handleLogin}>
                        <div style={style.signInText}>SignUp</div>

    
                        <RegisterCard
                            handleLogin={this.handleLogin}
                            handleFieldChange={this.handleFieldChange}

                            {...this.props} />
                    </Form>
                    
                </div>
            </>
        )
    }
}

export default withRouter(Register);

