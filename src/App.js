import React,{Component} from 'react';
import ApplicationViews from './components/ApplicationViews';
// import Nav from './components/nav/Nav';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

class App extends Component {
  state = {
    user: sessionStorage.getItem("credentials") !== null,
    userId: sessionStorage.getItem("credentials") !== null ? JSON.parse(sessionStorage.getItem("credentials")).id : false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null


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
    return(
      <>
       
          
            {/* <Nav /> */}
            <ApplicationViews userId={this.state.userId} /> 
           
          <Login setUser={this.setUser} />
          <Register setUser={this.setUser} />
          
        
        
        
      </>
    )
  
      }}

export default App;   