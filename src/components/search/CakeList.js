import React from 'react'
import APIManager from '../../modules/APIManager'
import Navi from "../nav/Navi"
import AuthButtons from "../auth/AuthButtons"
import CakeCard from "../search/CakeCard"
import '../search/CakeList.css'
import { Spinner, Form } from 'reactstrap'

class CakeList extends React.Component {
    state = {
        searchResults: [],
        loadingStatus: true,

    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    // function that searches Zomato for desserts using the cuisine type id passed as a parameter




    componentDidMount() {
        console.log("CakeList: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        APIManager.searchZomato()
            .then((allResults) => {
                console.log(allResults)
                this.setState({
                    searchResults: allResults.restaurants,
                    loadingStatus: false,
                });
            });
    }






    render() {

        if (this.state.loadingStatus) {
            return  <div className="mainContainer">           
                    <div className="loader">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                </div>
            

        }
        else {

            return (
                <>
                    <header>

                        <Navi />
                        <AuthButtons />
                    </header>





                    <div className="wrapper">
                        <Form>
                            <div>

                                {this.state.searchResults.map((result, i) =>
                                    <CakeCard key={i}
                                        restaurant={result.restaurant}
                                        {...this.props} />



                                )}</div>

                        </Form>
                    </div>
                </>

            );
        }
    }
}
export default CakeList

