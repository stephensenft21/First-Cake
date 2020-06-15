
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, withRouter } from "react-router-dom"

import  {TiThMenuOutline} from "react-icons/ti"
import '../nav/Navi.css'
// import './Navbar.css'

class Navi extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  logout = () => {
    sessionStorage.removeItem("credentials")
   
  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null
  render() {
    return (
      <>
        <div className="nav-container navBarContainer">
          
         <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
     <DropdownToggle><TiThMenuOutline/>

            </DropdownToggle>
        
            <DropdownMenu>
              {this.isAuthenticated()? (
                <>
                  <DropdownItem><Link className="nav-link" to="/home">Home</Link></DropdownItem>
                  <DropdownItem><Link className="nav-link" to="/about">About</Link></DropdownItem>
                  <DropdownItem><Link className="nav-link" to="/favorites">My First Cakes</Link></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem><Link className="nav-link" onClick={this.logout} to="/">Logout</Link></DropdownItem>
                </>
              ) : (
                  <>
                    <DropdownItem><Link className="nav-link" to="/about">About</Link></DropdownItem>
                  </>
                )}
            </DropdownMenu>
          </Dropdown>

        </div>

      </>
    );
  }
} export default withRouter(Navi)






