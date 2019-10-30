import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody } from "reactstrap";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import Moment from 'moment';
import "./CommentCard.css"

class CommentCard extends Component {
   

    handleDelete = (id) => {
        API.delete(id, "comments")
            .then(() => this.props.getData());
    }


    //renders
    render() {
        let timeStamp = Moment(this.props.comment.date).fromNow();
        return (
            <div>
                <Card className="mainCard">
                    <CardBody>
                        <CardTitle>{this.props.comment.text}</CardTitle>
                        <CardText>Posted: {timeStamp}  </CardText >
                        {this.props.comment.editTimeStamp !== "" ? (
                            <CardText>Last Edited {Moment(this.props.comment.editTimeStamp).fromNow()} </CardText >
                            ) : (
                                ""
                                )}
                        
                        <Row className="buttonFlex">
                            <Button className="button" type="button" onClick={() => { this.props.history.push(`/comments/${this.props.comment.id}/edit`) }}><FaRegEdit /></Button>
                            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.comment.id)}><FaRegTrashAlt /></Button>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CommentCard;