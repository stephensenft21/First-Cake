import React, { Component } from 'react';
import { Link } from "react-router-dom"



class Logo extends Component {





    render(){




        return(

            <button type="button" onClick={() => { this.props.history.push(`/home/`) }}>Logo</button>

        



        )
    }
    





} export default Logo