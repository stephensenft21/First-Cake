import React, { Component } from 'react';
import '../logo/Logo.css'
import styles from '../../Style'



class Logo extends Component {

    state =
        {
            status: "",
        }


    onEntering = () => {
        this.setState({ status: 'Opening...' });
    }

    onEntered = () => {
        this.setState({ status: 'Opened' });
    }

    render() {




        return (
            <div className="mainContainer" style={styles.mainContainer}>

              {/* <img src={require(`Images/Project-Logo-Capstone`)} alt="My Dog" ></img>  */}
               <button className="logoButton" type="button" onClick={() => { this.props.history.push(`/home/`) }}>Logo</button>
                 
                <form className="logoForm">
                    
                    <div className="firstDateText">Your First Date Awaits... </div>
                </form>
            </div>



        )
    }






} export default Logo