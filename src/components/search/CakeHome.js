import React, { Component } from 'react'

import AuthButtons from '../auth/AuthButtons'
// import '../search/CakeHome.css'
import Navi from '../nav/Navi'
import { Link } from "react-router-dom"

import style from '../../Style'
import SimpleBottomNavigation from '../nav/MaterialNavigation'
import {PizzaButton, FondueButton, PubFoodButton, SushiButton, DessertsButton,DrinkButton,CafeButton,BarFoodButton, JuiceButton, IceCreamButton,BakeryButton,DonutsButton} from '../style/SearchHamburgerHook'




// import { relativeTimeRounding } from 'moment';


export default class CakeHome extends Component {






    render() {
        return (
        <>
                
                <SimpleBottomNavigation />

 
                <AuthButtons />
              

                
                    <Link to={`/home/82`}> <PizzaButton text={"Pizza"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/318`}><FondueButton text={"Fondue"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/983`}><PubFoodButton text={"Pub Food"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/177`}><SushiButton text={"Sushi"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/501`}><DessertsButton text={"Desserts"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/268`}><DrinkButton text={"Drinks Only"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/30`}><CafeButton text={"Cafe"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/227`}><BarFoodButton text={"Bar Food"} type="button" id="searchResults" placeholder="Search for First Cake" /></Link>
                    <Link to={`/home/164`}><JuiceButton text={"Juice"} type="button" name="Search for Juices" id="JuicesTerm" placeholder="Search for First Juice " /></Link>
                    <Link to={`/home/233`}><IceCreamButton text={"Ice Cream"} type="button" name="Search for Ice Cream  " id="IceCreamsTerm" placeholder="Search for First Ice Cream " /></Link>
                    <Link to={`/home/105`}><BakeryButton text={"Bakery"} type="button" name="Search for Bakery " id="BakeriesTerm" placeholder="Search for First Bakery " /></Link>
                    <Link to={`/home/959`}><DonutsButton text={"Donuts"} className="donutButton" type="button" name="Search for Donuts " id="DonutsTerm" placeholder="Search for First Donuts " /></Link>
                  
             </>
        )
    }
}
