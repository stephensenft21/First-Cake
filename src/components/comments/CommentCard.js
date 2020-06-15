import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import { Card, CardTitle, CardText, Button, CardBody } from "reactstrap";

import Moment from 'moment';
import "./CommentCard.css"

class CommentCard extends Component {


    handleDelete = (id) => {
        APIManager.delete(id, "comments")

            .then(() => {
                this.props.getComments()

            }
            )
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
            <CardText>Last Edited: {Moment(this.props.comment.editTimeStamp).fromNow()} </CardText >
        ) : (
                ""
            )}

      
            <Button className="button" type="button" onClick={() => { this.props.history.push(`/comments/${this.props.comment.id}/edit`) }}>Edit</Button>
            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.comment.id)}>Delete</Button>
      
    </CardBody>
</Card>
</div> 
        );
    }
}

export default CommentCard;







