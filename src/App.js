import React,{Component} from 'react';
import ApplicationViews from './components/ApplicationViews';
import Nav from './components/nav/Nav';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

class App extends Component {
  state = {
    user: localStorage.getItem("credentials") !== null,
    userId: localStorage.getItem("credentials") !== null ? JSON.parse(localStorage.getItem("credentials")).id : false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null


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
        {this.state.user ?
          <>
            <Nav />
            <ApplicationViews userId={this.state.userId} />
         
         :
          <Login setUser={this.setUser} />
          <Register setUSer={this.setUser} />
          </>
        
        }
      </>
    )
  }
}

export default App;   