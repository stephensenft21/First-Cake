import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import { Card, CardSubtitle, Row, CardTitle, CardText, Button, CardBody } from "reactstrap";
import { FaRegTrashAlt, } from "react-icons/fa";
import { Link } from "react-router-dom"
class FavoriteCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id, "favorites")
            .then(() => this.props.getData());
    }







    render() {
        return (
            <>
                <div> <Card className="mainCard">
                    <CardBody>
                        <CardTitle>{`${this.props.favorite.name}`}</CardTitle>
                        <CardSubtitle>{this.props.favorite.address}</CardSubtitle>


                        <CardText> {`Cost for Two:   $${this.props.favorite.average_cost_for_two}`}  </CardText >
                        <CardText>{`Phone#:${this.props.favorite.phone_numbers}`}  </CardText >
                        <CardText>{`City:${this.props.favorite.city}`}  </CardText >
                        <CardText>{`Rating:${this.props.favorite.rating}`}  </CardText>
                        <CardText>{`Other user votes: ${this.props.favorite.votes}`}</CardText>

                        <Row className="buttonFlex">


                        </Row>
                    </CardBody>
                </Card>
                    <Link to={`/comments/${(this.props.favorite.id)}`}> <Button className="button" type="button" >new comment</Button></Link>
                    <Button className="button" type="button" onClick={() => this.handleDelete(this.props.favorite.id)}><FaRegTrashAlt /></Button>
                </div>


            </>

        )
    }

} export default FavoriteCard