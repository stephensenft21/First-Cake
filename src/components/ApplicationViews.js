import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Login from ''

class ApplicationViews extends Component {

    render() {
        return (
            <>

                <Route path="/" render={props => {
                    return <h1>render me</h1>


                }} />
            </>
        )
    }
}

export default ApplicationViews;