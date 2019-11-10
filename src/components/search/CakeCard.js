import React, { Component } from 'react';
// import Rating from 'react-rating'
import APIManager from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody, CardHeader, CardFooter, CardSubtitle } from "reactstrap";
import CssBaseline from '@material-ui/core/CssBaseline';
// import Moment from 'moment';

// import "./CommentCard.css"

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
            .then(() => this.props.history.push(this.props.match.params.cuisineId))

        this.props.getUniqueIds()
        this.forceUpdate()

    }
   


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    componentDidMount() {
      
            this.setState({
                saved: this.props.uniqueIds.includes(this.props.restaurant.id)
    
            })
    
    
    
        
        console.log("I mounted in caked card")
    }


    render() {



        return (



            <div >


                {(this.isAuthenticated()) ?
                    <>
                 
                        <CardHeader>Location</CardHeader>
                        <Card className="mainCard">
                            <CardBody>
                                <CardTitle>{`${this.props.restaurant.name}`}</CardTitle>
                                <CardSubtitle>{this.props.restaurant.location.address}</CardSubtitle>


                                <CardText> {`Cost for Two:   $${this.props.restaurant.average_cost_for_two}`}  </CardText >
                                <CardText>{`Phone#:${this.props.restaurant.phone_numbers}`}  </CardText >
                                <CardText>{`City:${this.props.restaurant.location.city}`}  </CardText >
                                <CardText>{`Rating:${this.props.restaurant.user_rating.aggregate_rating}`}  </CardText>
                                <CardText>{`Other user votes: ${this.props.restaurant.user_rating.votes}`}</CardText>

                                {!this.state.saved ? (<Button className="button" type="button" disabled={this.props.loadingStatus} onClick={() => this.constructNewFave()}>Save button</Button>
                                ) : (<div></div>)}
                                <Row className="buttonFlex">
                                </Row>
                            </CardBody>
                        </Card>
                    </>
                    :
                    <>
                        <Card className="mainCard">
                            <CardBody>
                                <CardTitle>{`${this.props.restaurant.name}`}</CardTitle>
                                <CardSubtitle>{this.props.restaurant.location.address}</CardSubtitle>


                                <CardText> {`Cost for Two:   $${this.props.restaurant.average_cost_for_two}`}  </CardText >
                                <CardText>{`Phone#:${this.props.restaurant.phone_numbers}`}  </CardText >
                                <CardText>{`City:${this.props.restaurant.location.city}`}  </CardText >
                                <CardText>{`Rating:${this.props.restaurant.user_rating.aggregate_rating}`}  </CardText>
                                <CardText>{`Other user votes: ${this.props.restaurant.user_rating.votes}`}</CardText>


                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    </>}
            </div>

        );
    }
}

export default CakeCard;