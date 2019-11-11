import React,{Component} from 'react';
import ApplicationViews from './components/ApplicationViews';
import {withRouter} from 'react-router'
// import Nav from './components/nav/Nav';
import './App.css';
import SimpleBottomNavigation from './components/nav/MaterialNavigation'
import Navi from './components/nav/Navi';


class App extends Component {
  state = {
    user: sessionStorage.getItem("credentials") !== null,
    userId: sessionStorage.getItem("credentials") !== null ? JSON.parse(sessionStorage.getItem("credentials")).id : false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null
  
  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }

  logout = () => {
    sessionStorage.removeItem("credentials")
    this.setState({ user: sessionStorage.getItem("credentials") !== null })
  }

  setUser = (authObj) => {
    console.log("authObj", authObj)
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    console.log(authObj, typeof authObj)
    this.setState({
      user: this.isAuthenticated(),
      userId: authObj.id
    });
  }

  render() {
    // console.log(this.props)
    return(
      <>
       
         
            {/* <Nav /> */}
          {/* <AuthButtons/>   */}
            <ApplicationViews
            isAuthenticated={this.isAuthenticated} 
            setUser={this.setUser}
            userId={this.state.userId}
            clearUser={this.clearUser}
            {...this.props} /> 
  
          </>
        
        
      
    )
  
      }}

export default withRouter(App);     