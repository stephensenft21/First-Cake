import React from 'react'
import APIManager from '../../modules/APIManager'
import Navi from "../nav/Navi"
import AuthButtons from "../auth/AuthButtons"
import CakeCard from "../search/CakeCard"
import '../search/CakeList.css'
import { Form } from 'reactstrap'
import { style } from '@material-ui/system'

class CakeList extends React.Component {
    state = {
        searchResults: [],
        loadingStatus: true,
        uniqueIds: []
    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    // function that searches Zomato for desserts using the cuisine type id passed as a parameter



getUniqueIds = () => {
    APIManager.getAllWithUserId("favorites",this.props.userId,"comments").then(results => {
        let uniqueIdArray = []
         console.log(results)
             results.forEach(result => {
                 uniqueIdArray.push(result.uniqueId)
             })
             this.setState({
                uniqueIds: uniqueIdArray
             })
      })
      console.log("this is the unique id function")
}

    componentDidMount() {
        console.log("CakeList: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        APIManager.searchZomato(this.props.match.params.cuisineId)
            .then((allResults) => {
                console.log(allResults)
                this.setState({
                    searchResults: allResults.restaurants,
                    loadingStatus: false,
                });
            });

           this.getUniqueIds()
    }
    //  getAllWithUserId(database,userId,secondResource) {
  //      return fetch(`${remoteURL}/${database}/?userId=${userId}&_embed=${secondResource}`).then(e => e.json())
   // },                  //http://localhost:5002/favorites?_sort=votes&_order=asc&userId=1&_embed=comments this one works
    





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
            <div className="maincontainer">
                    <header>

                    
                    </header>





                    <div className="wrapper">
                        <Form style={style.Form}>
                            <div>

                                {this.state.searchResults.map((result, i) =>
                                    <CakeCard key={i}
                                    getUniqueIds={this.getUniqueIds}
                                    uniqueIds={this.state.uniqueIds}
                                    userId={this.props.userId}
                                        restaurant={result.restaurant}
                                        {...this.props} />



                                )}</div>

                        </Form>
                    </div>
                    </div>
                </>

            );
        }
    }
}
export default CakeList

