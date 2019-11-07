import React, { Component } from "react";
import { Route } from "react-router-dom";
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import EditCommentForm from "./comments/EditCommentForm";
import CakeHome from ".//search/CakeHome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import FavoriteList from './favorites/FavoriteList'
import Logo from './logo/Logo'
import CakeList from './search/CakeList'
// import FavoriteDetails from './favorites/FavoriteDetails'

// import Login from ''

class ApplicationViews extends Component {

    componentDidMount() {
        console.log("this is appviews", this.props)
    }

    render() {
        return (
            <>
                <Route exact path="/home" render={props => {
                    return <CakeHome
                        setUser={this.props.setUser} {...props}
                        userId={this.props.userId} />
                }} />
                {/* Comment Routes */}
                <Route exact path="/comments" render={props => {

                    return (
                        <CommentList

                            userId={this.props.userId}
                            setUser={this.props.setUser}
                            {...props} />
                    );
                }}
                />
                <Route path="/comments/new" render={props => {
                    return <CommentForm
                        userId={this.props.userId}
                        {...props} />;
                }}
                />
                <Route path="/comments/:favoriteId(\d+)/edit" render={props => {
                    return <EditCommentForm
                        favoriteId={parseInt(props.match.params.favoriteId)}
                        userId={this.props.userId}
                        {...props} />;
                }}
                />       
                 {/* <Route path="/favorites" render={props => {

                    return <FavoriteList
                        userId={this.props.userId}
                        // favoriteId={parseInt(props.match.params.favoriteId)}

                        {...props}

                        setUser={this.props.setUser} /> */}
                {/* }} />
                 */}
                <Route path="/favorites/:favoriteId(\d+)" render={props => {

                    return <FavoriteList
                        userId={this.props.userId}
                        favoriteId={parseInt(props.match.params.favoriteId)}

                        {...props}

                        setUser={this.props.setUser} />
                }} />



                <Route exact path="/register" render={props => {
                    return <Register
                        {...props}

                        setUser={this.props.setUser} />;
                }}
                />
                <Route exact path="/login" render={props => {
                    return <Login
                        {...this.props}
                        setUser={this.props.setUser} />;
                }}
                />
                <Route exact path="/favorites" render={props => {
                    return <FavoriteList userId={this.props.userId}
                        {...props} />
                }} />


                <Route exact path="/" render={props => {
                    return <Logo
                        {...props} />
                }} />
                <Route path="/home/:cuisineId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent

                    return < CakeList cuisineId={parseInt(props.match.params.cuisineId)}
                        userId={this.props.userId} {...props} />
                }} />


            </>

        )
    }
}

export default ApplicationViews;
