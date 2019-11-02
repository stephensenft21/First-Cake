import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../auth/AuthButtons.css'
import {Button} from 'reactstrap';



class AuthButtons extends Component {


    render() {
       
            return (
                
               <>
                <div>
                    <Link to={`/login`} ><Button className='authButtonsLeft'>Sign In</Button></Link>
                    
                </div>
                <div>
                    <Link to={`/register`} ><Button className='authButtonsRight'>Sign Up</Button></Link>
                </div>
              </>       

            )

        




    }












}export default AuthButtons