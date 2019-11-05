import React from 'react'
import APIManager from '../../modules/APIManager'
import Navi from "../nav/Navi"
import AuthButtons from "../auth/AuthButtons"
import CakeCard from "../search/CakeCard"


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
        APIManager.searchZomato(this.props.match.params.cuisineId)
            .then((allResults ) => {
                console.log(allResults) 
                this.setState({
                 searchResults: allResults.restaurants,
                 loadingStatus: false,
                });
            });
    }


render() {

    if (this.state.loadingStatus)
     { return <p>Loading.. </p> }
     else {
    
    return (
       <>
         <Navi />
                <AuthButtons />
                <div>{this.state.searchResults.map((result,i) =>

                    <CakeCard  key={i} restaurant={result.restaurant}

                        {...this.props} />



                )}</div>
       </>
    );
}}
}


 export default CakeList

