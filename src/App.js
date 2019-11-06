import React,{Component} from 'react';
import ApplicationViews from './components/ApplicationViews';
import Navi from './components/nav/Navi'

// import Nav from './components/nav/Nav';
import './App.css';


class App extends Component {
  state = {
    user: localStorage.getItem("credentials") !== null,
    userId: localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials")).id : false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  
  clearUser = () => {
    localStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }

  logout = () => {
    localStorage.removeItem("credentials")
    this.setState({ user: localStorage.getItem("credentials") !== null })
  }

  setUser = (authObj) => {
    console.log("authObj", authObj)
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
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
    return(
      <>
       
         
            {/* <Nav /> */}
          {/* <AuthButtons/>   */}
            <ApplicationViews
            isAuthenticated={this.isAuthenticated} 
            setUser={this.setUser}
            userId={this.state.userId}
            clearUser={this.clearUser} /> 
          
         
        
        
      </>
    )
  
      }}

export default App;     