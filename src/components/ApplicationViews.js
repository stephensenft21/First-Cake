import React, { Component } from "react";
import { Route } from "react-router-dom";
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import EditCommentForm from "./comments/EditCommentForm";
import CakeSearch from ".//search/CakeSearch";
import Login from "./auth/Login";
import Register from "./auth/Register";
import FavoriteList from './favorites/FavoriteList'
import Logo from './logo/Logo'
// import FavoriteDetails from './favorites/FavoriteDetails'

// import Login from ''

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route
                    exact
                    path="/home"
                    render={props => {
                        return <CakeSearch {...props} />
                    }}/>
                {/* Comment Routes */}
                <Route exact path="/comments" render={props => {
                        return (
                            <CommentList 
                            {...props} 
                            activeUser={this.props.activeUser} />
                        );
                    }}
                />
                <Route path="/comments/new" render={props => {
                        return <CommentForm 
                        {...props} />;
                    }}
                />
                <Route path="/comments/:commentId(\d+)/edit" render={props => {
                        return <EditCommentForm 
                        {...props} />;
                    }}
                />
                <Route exact path="/register" render={props => {
                        return <Register 
                        {...props} 
                        setUser={this.props.setUser} />;
                    }}
                />
                <Route exact path="/login" render={props => {
                        return <Login 
                        {...props} 
                        setUser={this.props.setUser} />;
                    }}
                />
                <Route exact path="/favorites" render={props =>{
                    return <FavoriteList/>
                }} />
                 
                 
                 <Route exact path="/" render={props =>{
                    return <Logo
                    {...props} />
                }} />

               
            </>
        
        )
    }
}

export default ApplicationViews;
