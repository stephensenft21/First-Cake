import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route path="/" render={props => {
        //   return <OrderView userId={this.props.userId} />
        }} />
      </>
    )
  }
}

export default ApplicationViews;