import React, { Component } from 'react';
// import Rating from 'react-rating'
import APIManager from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody, CardHeader, CardFooter, CardImg, CardSubtitle } from "reactstrap";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Moment from 'moment';
// import "./CommentCard.css"

class CakeCard extends Component {


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







    //renders
    render() {
        // let timeStamp = Moment(this.props.comment.date).fromNow();
        console.log("this is the phoneNmbers",this.props.restaurant.phone_numbers)
        
        return (
            <div>
                <Card className="mainCard">
                    <CardBody>
                        <CardTitle>{`${this.props.restaurant.name}`}</CardTitle>
                        <CardSubtitle>{this.props.restaurant.location.address}</CardSubtitle> 
                  

                            <CardText> {`Cost for Two:   $${this.props.restaurant.average_cost_for_two}`}  </CardText >
                            <CardText>{`Phone#:${this.props.restaurant.phone_numbers}`}  </CardText > 
                            <CardText>{`City:${this.props.restaurant.location.city}`}  </CardText >
                            <CardText>{`Rating:${this.props.restaurant.user_rating.aggregate_rating}`}  </CardText>
                            <CardText>{`Other user votes: ${this.props.restaurant.user_rating.votes}`}</CardText> 
                      


                        {/* <Row className="buttonFlex">
                            <Button className="button" type="text-box" onClick={() => { this.props.history.push(`/comments/${this.props.comment.id}/edit`) }}><FaRegEdit /></Button>
                            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.comment.id)}><FaRegTrashAlt /></Button>
                        </Row> */}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CakeCard;