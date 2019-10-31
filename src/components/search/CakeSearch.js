import React, { Component } from 'react'
import {Form, FormGroup, Button, Input} from 'reactstrap';
import APIManager from '../../modules/APIManager'
import AuthButtons from '../auth/AuthButtons'
import '../search/CakeSearch.css'

class CakeSearch extends Component {

    state = {
        term: ""
    }


    // handleFieldChange = (evt) => {
    //     const stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }









    search = (evt) => {
        evt.preventDefault()
        let term = this.state.term;
        console.log(term)
        APIManager.searchZomato(term).then(allResults => {
            console.log(allResults)
        }
        )
    }




    // search = (term) => {
    //     if (this.props.user) {
    //         APIManager.searchZomato(term).then(allResults => {

    //             allResults.forEach(restaurant => {
    //                 APIManager.get(restaurant.id,"favoriteCakes")
    //             })
    //         })
    //     } else {

    //     }

    // }



    render() {
        // this.search("chocolate_cake")

            return (
<>
          
           
           
            <div className="mainContainer">
            <div><><AuthButtons/></></div>  
                <Form className="SearchForm" onSubmit={this.search}>
                  <div className="firstDateText">Your First Date Awaits...</div>
                    <div className="SearchFormGroup ">
                       
                           <div className="searchInput"><Input onChange={(event)=> {this.setState({term: event.target.value})}} type="search" name="Search for First Cake " id="term" placeholder="Search for First Cake " bsSize="lg"></Input></div>
                      
                    </div>
                    <div><Button className="searchButton" type="submit" color="secondary">Search</Button>{' '}</div>
                </Form>

            </div>
</>
        )


    }











} export default CakeSearch