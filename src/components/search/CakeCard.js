import React, { Component } from 'react';
import {searchCardMaterialUI} from '../search/MaterialSearchCard'
import APIManager from '../../modules/APIManager'
import { SearchCardMaterialUI } from '../material/MaterialCards';



class CakeCard extends Component {
    state = {
        checked: false,
        saved: false
    }


    //     <h2>Rate Product:</h2>
    //                         <Rating
    //                             id="condition"
    //                             initialRating={this.props.product.rating}
    //                             onClick={evt => this.setCondition(evt)}
    //                         />
    // setCondition = evt => {
    //         let collections = {
    //             rating: evt
    //         };
    //         APIManager.patch(
    //             "fave",
    //             collections,
    //             this.props.product.id
    //         ).then(response => response);
    //     };


    constructNewFave = (blue) => {


        window.alert("Your selection has has been saved to MyFaves");
        let userCoin = JSON.parse(sessionStorage.getItem("credentials")).id


        const favorite = {
            userId: userCoin,
            uniqueId: this.props.restaurant.id,
            name: this.props.restaurant.name,
            address: this.props.restaurant.location.address,
            average_cost_for_two: this.props.restaurant.average_cost_for_two,
            phone_numbers: this.props.restaurant.phone_numbers,
            rating: this.props.restaurant.user_rating.aggregate_rating,
            city: this.props.restaurant.location.city,
            votes: this.props.restaurant.user_rating.votes



        };
        // Create the animal and redirect user to animal list
        APIManager.post(favorite, "favorites")
            .then(() => this.props.getUniqueIds())

        
       
    }
   


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    
    
    
        
      

    render() {

       const buttonActive = this.props.uniqueIds.includes(this.props.restaurant.id)
       console.log("this is button active ", buttonActive)

        return (



            <div >


                {(this.isAuthenticated()) ?
                    <>

                       <SearchCardMaterialUI/>
                 

                                { !buttonActive ? (<button className="button" type="button" disabled={this.props.loadingStatus} onClick={() => this.constructNewFave()}></button>
                                ) : (<div> </div>)}
                               
                      
                    </>
                    :
                    <>
                     
                    </>}
            </div>

        );
    }
}

export default CakeCard;