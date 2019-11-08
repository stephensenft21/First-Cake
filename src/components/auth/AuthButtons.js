import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../auth/AuthButtons.css'
import {Button} from 'reactstrap';
import ButtonBase from '../style/SearchButtonHooks'
import style from '../../Style'

class AuthButtons extends Component {


    render() {
       
            return (
                
               <>
                <div>
                    <Link to={`/login`} ><ButtonBase style={style.authButtonsLeft} text={"Sign In"}/></Link>
                    
                </div>
                <div>
                    <Link to={`/register`} ><ButtonBase style={style.authButtonsRight} text={"Sign Up"}/></Link>
                </div>
              </>       

            )

        




    }












}export default AuthButtons