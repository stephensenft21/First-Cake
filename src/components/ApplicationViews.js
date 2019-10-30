import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentList from './comments/CommentList';
import CommentForm from './comments/CommentForm'
import EditCommentForm from './comments/EditCommentForm'
import HomeView from './views/HomeView'
// import Login from ''

class ApplicationViews extends Component {

    render() {
        return (
            <>
                 <Route exact path="/" render={(props) => {
          return <HomeView />
        }} />
                {/* Comment Routes */}
                <Route exact path="/comments" render={props => {
                    return (<CommentList {...props} activeUser={this.props.activeUser} />)
                }} />
                <Route path="/comments/new" render={(props) => {
                    return <CommentForm {...props} />
                }} />
                <Route path="/comments/:commentId(\d+)/edit" render={props => {
          return <EditCommentForm {...props} />
        }} />
            </>
        )
    }
}

export default ApplicationViews;