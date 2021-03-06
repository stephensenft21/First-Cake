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
            <div style={styles.mainContainer}>

            
<img src={require(`../../Images/Project-Logo-Capstone.png`)} alt="My Logo" style={styles.logoButton} onClick={() => { this.props.history.push(`/home/`) }}></img>
                 
                <form className="logoForm">
                    
                    <div className="firstDateText">Your Next First Date Awaits... </div>
                </form>
            </div>



        )
    }






} export default Logo