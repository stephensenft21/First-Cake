import React, { Component } from 'react';
import { Link } from "react-router-dom"

import {Col,Button} from 'reactstrap';



class AuthButtons extends Component {


    render() {
       
            return (
                
                <Col sm={10}>
                <div>
                    <Link to={`/register`} ><Button>Sign Up</Button></Link>
                </div>
                <div>
                    <Link to={`/login`} ><Button>Sign In</Button></Link>
                    
                </div>
                </Col>

            )

        




    }












}export default AuthButtons