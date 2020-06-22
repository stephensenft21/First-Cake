import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../auth/AuthButtons.css'
import { AuthMaterialButton1 } from '../style/SearchHamburgerHook'
import { AuthMaterialButton2 } from '../style/SearchHamburgerHook'
import style from '../../Style'
class AuthButtons extends Component {
    render() {
        return (
            <>
                <Link to={`/login`} ><AuthMaterialButton1 text={"Sign In"} /></Link>
                <Link to={`/register`} ><AuthMaterialButton2 text={"Sign Up"} /></Link>
            </>
        )
    }
}
export default AuthButtons