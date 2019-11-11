import React, { Component } from "react";
import { Route } from "react-router-dom";
import CommentList from "./comments/CommentList";
import CommentForm from "./comments/CommentForm";
import EditCommentForm from './comments/EditCommentForm';
import CakeHome from ".//search/CakeHome";
import Login from "./auth/Login";
import Register from "./auth/Register";
import FavoriteList from './favorites/FavoriteList'
import Logo from './logo/Logo'
import CakeList from './search/CakeList'
import FavoriteDetails from './favorites/FavoriteDetails'
import  {IconButtonsBack} from './material/MaterialButtons'
import style from '../Style'
// import FavoriteDetails from './favorites/FavoriteDetails'

// import Login from ''

class ApplicationViews extends Component {

    componentDidMount() {
        console.log("this is appviews", this.props)
    }

    render() {
        return (
            <>
                {/* This Route takes you home   */}
                <Route exact path="/home" render={props => {
                    return <CakeHome
                        isAuthenticated={this.isAuthenticated}
                        setUser={this.setUser}
                        userId={this.props.userId}
                        clearUser={this.props.clearUser}
                        {...this.props}
                        favoriteId={parseInt(props.match.params.favoriteId)}

                        {...props} />
                }} />
                {/* Comment Routes */}
                <Route exact path="/comments" render={props => {

                    return (
                        <CommentList
                            isAuthenticated={this.props.isAuthenticated}
                            setUser={this.props.setUser}
                            userId={this.props.userId}
                            clearUser={this.props.clearUser}
                            {...this.props}
                            favoriteId={parseInt(props.match.params.favoriteId)}

                            {...props} />
                    );
                }}
                />
                {/* This Route takes you to the comment form that is specific to the favorited Id */}
                <Route exact path="/comments/:favoriteId(\d+)" render={props => {
                    return <CommentForm
                        isAuthenticated={this.isAuthenticated}
                        setUser={this.setUser}
                        userId={this.props.userId}
                        clearUser={this.props.clearUser}
                        {...this.props}
                        favoriteId={parseInt(props.match.params.favoriteId)}

                        {...props} />;
                }}
                />
                {/* This Route takes you to the edit form of the specific favorite */}
                <Route path="/comments/:commentId(\d+)/edit" render={props => {
                    return <EditCommentForm
                        commentId={parseInt(props.match.params.commentId)}
                        userId={this.props.userId}
                        {...props} />;
                }}
                />
                {/* <Route path="/favorites" render={props => {

                     return <FavoriteList
                         userId={this.props.userId}
                         favoriteId={parseInt(props.match.params.favoriteId)}

                         {...props}

                        setUser={this.props.setUser} /> }
                 }/> */}

                <Route path="/favorites/:favoriteId(\d+)" render={props => {
                       
                    return <> <FavoriteDetails
                            userId={this.props.userId}
                            favoriteId={parseInt(props.match.params.favoriteId)}

                            {...props}

                            setUser={this.props.setUser} />
                        <CommentList
                            userId={this.props.userId}
                            favoriteId={parseInt(props.match.params.favoriteId)}

                            {...props}

                            setUser={this.props.setUser} />
                        <div/>
                        </>
                    
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
