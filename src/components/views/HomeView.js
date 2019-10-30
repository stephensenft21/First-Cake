import React, {Component} from 'react'
import { Col, Form, FormGroup, Button, Input, Collapse } from 'reactstrap';
import APIManager from '../../modules/APIManager'
import ApplicationViews from '../ApplicationViews';

class HomeView extends Component {

state = {
    restaurants: []
}


handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}







search = (term) => {
    APIManager.searchZomato(term).then(allResults => {

        allResults.forEach(restaurant => {
            APIManager.get(restaurant.id,"favoriteCakes")
        })
    })

}



render() {
    return(
   <React.Fragment>






   </React.Fragment>
    )


}











} export default HomeView