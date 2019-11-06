import React, { Component } from 'react';
// import Rating from 'react-rating'
import APIManager from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody, CardHeader, CardFooter, CardSubtitle } from "reactstrap";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Navi from '../nav/Navi'
import AuthButtons from '../auth/AuthButtons'
// import Moment from 'moment';

// import "./CommentCard.css"

class CakeCard extends Component {
    state = { checked: false }

    handleDelete = (id) => {
        APIManager.delete(id, "comments")
            .then(() => this.props.getData());
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
let userCoin = JSON.parse(localStorage.getItem("credentials")).id
        console.log(blue)
       
        const favorite = {
            userId: userCoin,
            name: this.props.restaurant.name,
            address: this.props.restaurant.location.address,
            average_cost_for_two: this.props.restaurant.average_cost_for_two,
            phone_numbers: this.props.restaurant.phone_numbers,
            rating: this.props.restaurant.user_rating.aggregate_rating,
            city: this.props.restaurant.location.city,
            votes: this.props.restaurant.user_rating.votes
 


        };
        // Create the animal and redirect user to animal list
        APIManager.post(favorite,"favoriteCakes")
            .then(() => this.props.history.push(this.props.match.params.cuisineId))


    }





//renders
render() {
    // let timeStamp = Moment(this.props.comment.date).fromNow();
   

    return (

         <div className="mainContainer">
        <CardHeader>
           <Navi />
                    <AuthButtons />

           </CardHeader>
        <div >
           

            {(this.props.user) ?
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

                            <Row className="buttonFlex">
                                <Button className="button" type="text-box" onClick={() => { this.props.history.push(`/comments/${this.props.comment.id}/edit`) }}><FaRegEdit /></Button>
                                <Button className="button" type="button" onClick={() => this.handleDelete(this.props.comment.id)}><FaRegTrashAlt /></Button>
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
                            <Button className="button" type="button" disabled={this.props.loadingStatus} onClick={() => this.constructNewFave()}><FaRegTrashAlt /></Button>

                         
                        </CardBody>
                        <CardFooter></CardFooter>
                    </Card>
                </>}
        </div>
        </div>
    );
}
}

export default CakeCard;