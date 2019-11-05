import React, { Component } from 'react'
import { Form, Button, } from 'reactstrap';
import AuthButtons from '../auth/AuthButtons'
import '../search/CakeHome.css'
import Navi from '../nav/Navi'
import { Link } from "react-router-dom"

// import { relativeTimeRounding } from 'moment';


export default class CakeHome extends Component {

  




    render() {
        return (
            <div className="mainContainer">

                <Navi />
                <AuthButtons />
            
                <Form className="SearchForm">
                    <div className="firstDateText">Your First Date Awaits...</div>
                    <div className="SearchFormGroup ">

                        {/*searchDesserts*/}
                        <div className="searchInput">
                        <Link to={`/home/100`}><Button type="button"  name="Search for Desserts " id="searchResults" placeholder="Search for First Cake">Desserts</Button></Link>
                            
                        </div>
                        {/*searchJuices*/}
                        <div className="searchInput">
                        <Link to={`/home/164`}><Button type="button" name="Search for Juices" id="JuicesTerm" placeholder="Search for First Juice ">Juices</Button></Link>
                            
                        </div>
                        {/*searchIceCream*/}
                        <div className="searchInput">
                        <Link to={`/home/233`}><Button type="button"  name="Search for Ice Cream  " id="IceCreamsTerm" placeholder="Search for First Ice Cream ">IceCream</Button></Link>
               
                        </div>
                        {/*searchBakery*/}
                        <div className="searchInput">
                        <Link to={`/home/105`}><Button type="button"  name="Search for Bakery " id="BakeriesTerm" placeholder="Search for First Bakery ">Bakery</Button></Link>
                            
                        </div>
                        {/*searchDonuts*/}
                        <div >
                        <Link to={`/home/959`}><Button className="donutButton" type="button" name="Search for Donuts " id="DonutsTerm" placeholder="Search for First Donuts ">Donuts</Button></Link>

                        </div>

                    </div>
                   
                </Form>
            </div>
        )
    }
}
  