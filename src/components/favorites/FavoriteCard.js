import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import { Card, CardSubtitle, Row, CardTitle, CardText,  CardBody } from "reactstrap";
import MediaCard from '..//material/MaterialCards'
import { Link } from "react-router-dom"
import IconButtonsDelete, {IconButtonsDetails} from '../material/MaterialButtons'
class FavoriteCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id, "favorites")
            .then(() => this.props.getData());
    }







    render() {
        return (
            <>
            <MediaCard favorite={this.props.favorite}/>

               
                    <Link to={`/favorites/${(this.props.favorite.id)}`}><IconButtonsDetails/></Link>
                    
                    <div className="button" onClick={() => this.handleDelete(this.props.favorite.id)}><IconButtonsDelete/></div>
               


            </>

        )
    }

} export default FavoriteCard