import React, { Component } from 'react'
import { Form, Button, } from 'reactstrap';
import APIManager from '../../modules/APIManager'
import AuthButtons from '../auth/AuthButtons'
import CakeCard from '../../components/search/CakeCard';
import '../search/CakeSearch.css'
import Navi from '../nav/Navi'

// import { relativeTimeRounding } from 'moment';


export default class CakeSearch extends Component {

    state = {
        searchResults: []
    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // function that searches Zomato for desserts using the cuisine type id passed as a parameter
    searchDesserts = (evt) => {
        evt.preventDefault()
        let term = this.state.searchResults;
        console.log(term)
        APIManager.searchZomato("100").then(allResults => {
            this.setState({
                searchResults: allResults.restaurants
            })
        })
    }
    // function that searches Zomato for juice bars using the cuisine type id passed as a parameter

    searchJuices = (evt) => {
        evt.preventDefault()
        let term = this.state.JuicesTerm;
        console.log(term)
        APIManager.searchZomato("164").then(allResults => {
            this.setState({
                searchResults: allResults.restaurants
            })
        console.log(allResults)
        })
    }
    // function that searches Zomato for IceCream joints in the nashville area using the cuisine type id passed as a parameter
    searchIceCream = (evt) => {
        evt.preventDefault()
        let term = this.state.IceCreamsTerm;
        console.log(term)
        APIManager.searchZomato("233").then(allResults => {
            this.setState({
                searchResults: allResults.restaurants
            })
            console.log(allResults)
        })
    }
    // function that searches Zomato for bakeries in the nashville area using the cuisine type id passed as a parameter
    searchBakery = (evt) => {
        evt.preventDefault()
        let term = this.state.BakeriesTerm;
        console.log(term)
        APIManager.searchZomato("105").then(allResults => {
            this.setState({
                searchResults: allResults.restaurants
            })
        console.log(allResults)
        })
    }
    // function that searches Zomato for donut spots using the cuisine type id passed as a parameter
    searchDonuts = (evt) => {
        evt.preventDefault()
        let term = this.state.DonutsTerm;
        console.log(term)
        APIManager.searchZomato("959").then(allResults => {
            console.log(allResults)
            this.setState({
                searchResults: allResults.restaurants
            })
        })
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


    render(){   
        return (
            <div className="mainContainer">
              
                <Navi/>
                <AuthButtons />
                <div>{this.state.searchResults.map(result=> 
                    
                    <CakeCard
                    name={result.restaurant.name}
                    address={result.restaurant.location.address}
                    key={result.id}
                    result={result}

                    {...this.props}/>

                   
                   
               )}</div>
                <Form className="SearchForm">
                        <div className="firstDateText">Your First Date Awaits...</div>
                        <div className="SearchFormGroup ">
                            
                            {/*searchDesserts*/}
                            <div className="searchInput">
                                <Button type="button" onClick={this.searchDesserts} name="Search for Desserts " id="searchResults" placeholder="Search for First Cake">Dessert</Button>
                            </div>
                            {/*searchJuices*/}
                            <div className="searchInput">
                                <Button type="button" onClick={this.searchJuices} name="Search for Juices" id="JuicesTerm" placeholder="Search for First Juice ">Juice Bar</Button>
                            </div>
                            {/*searchIceCream*/}
                            <div className="searchInput">
                                <Button type="button" onClick={this.searchIceCream} name="Search for Ice Cream  " id="IceCreamsTerm" placeholder="Search for First Ice Cream ">Ice Cream</Button>
                            </div>
                            {/*searchBakery*/}
                            <div className="searchInput">
                                <Button type="button" onClick={this.searchBakery} name="Search for Bakery " id="BakeriesTerm" placeholder="Search for First Bakery ">Bakery</Button>
                            </div>
                            {/*searchDonuts*/}
                            <div >
                                <Button className="donutButton" type="button" onClick={this.searchDonuts} name="Search for Donuts " id="DonutsTerm" placeholder="Search for First Donuts "></Button>
                            </div>
                            
                    </div>
                    {/* <div><Button className="searchButton" type="submit" color="secondary">Search</Button>{' '}</div> */}
                </Form>
            </div>
        )
    }
}
    // <DateList
    // searchDesserts={this.searchDesserts}
    // searchBakery={this.searchBakery}
    // searchDonuts={this.searchDonuts}
    // searchJuices={this.searchJuices}
    // searchIceCream={this.searchJuices}
    // />
