import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody } from "reactstrap";
import { FaRegTrashAlt, } from "react-icons/fa";

class FavoriteCard extends Component {

    handleDelete = (id) => {
        API.delete(id, "favorites")
            .then(() => this.props.getData());
    }







    render() {
        return (
            <>
  <div>
                <Card className="mainCard">
                    <CardBody>
                        <CardTitle>Name Of favorite</CardTitle>
                        <CardText>Address of Favorite</CardText >
                        
                            <CardText>Category of Favorite </CardText >
                            <CardText></CardText>
                            <Row className="buttonFlex">
                            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.favorite.id)}><FaRegTrashAlt /></Button>
                        </Row>
                    </CardBody>
                </Card>
            </div>


            </>

        )
    }

} export default FavoriteCard