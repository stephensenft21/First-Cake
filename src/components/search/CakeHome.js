import React, { Component } from 'react'
import { Form} from 'reactstrap';
import AuthButtons from '../auth/AuthButtons'
// import '../search/CakeHome.css'
import Navi from '../nav/Navi'
import { Link } from "react-router-dom"
import ButtonBase from '../style/SearchButtonHooks'
import Typography from '../style/SearchButtonHooks';
import style from '../../Style'
import SimpleBottomNavigation from '../nav/MaterialNavigation'




// import { relativeTimeRounding } from 'moment';


export default class CakeHome extends Component {

  




    render() {
        return (
            <>
            <SimpleBottomNavigation/>
                                    
            <div className="mainContainer">

             
                <AuthButtons />
           
                <Form >
                
                    <div  className="SearchFormGroup ">

                        {/*searchDesserts*/}
                        <div>
                        <Link to={`/home/100`}>  <ButtonBase text={"Desserts"} type="button"   id="searchResults" placeholder="Search for First Cake" /></Link>
                            
                        </div>
                        {/*searchJuices*/}
                       
                       
                       
                       
                        <div className="searchInput">
                        <Link to={`/home/164`}><ButtonBase  text={"Juice"} type="button" name="Search for Juices" id="JuicesTerm" placeholder="Search for First Juice "/></Link>
                            
                        </div>
                        {/*searchIceCream*/}
                        <div className="searchInput">
                        <Link to={`/home/233`}> <ButtonBase text={"Ice Cream"}  type="button"  name="Search for Ice Cream  " id="IceCreamsTerm" placeholder="Search for First Ice Cream "/></Link>
               
                        </div>
                        {/*searchBakery*/}
                        <div className="searchInput">
                        <Link to={`/home/105`}> <ButtonBase text={"Bakery"} type="button"   name="Search for Bakery " id="BakeriesTerm" placeholder="Search for First Bakery "/></Link>
                            
                        </div>
                        {/*searchDonuts*/}
                        <div >
                        <Link to={`/home/959`}><ButtonBase text={"Donuts"} className="donutButton" type="button" name="Search for Donuts " id="DonutsTerm" placeholder="Search for First Donuts "/></Link>

                        </div>

                    </div>
                    
                </Form>
              
            </div>
            </>
        )
    }
}
  