import React, { Component } from 'react';
import { Link } from "react-router-dom"

import App from '../style/SpringHooks'
import '../logo/Logo.css'



class Logo extends Component {

    state =
        {
            status: "",
        }


    onEntering = () => {
        this.setState({ status: 'Opening...' });
    }

    onEntered = () => {
        this.setState({ status: 'Opened' });
    }

    render() {




        return (
            <div className="mainContainer">

                <button className="logoButton" type="button" onClick={() => { this.props.history.push(`/home/`) }}>Logo</button>
                 
                <form className="logoForm">
                    
                    <div className="firstDateText">Your First Date Awaits... <App /></div>
                </form>
            </div>



        )
    }






} export default Logo