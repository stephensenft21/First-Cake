import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'
import {MediaCard} from '..//material/MaterialCards'

class FavoriteCard extends Component {

    handleDelete = (id) => {
        APIManager.delete(id, "favorites")
            .then(() => this.props.getData());
    }
    render() {
     
       
        return (
            <>
            <MediaCard 
            {...this.props}
            handleDelete={this.handleDelete}
           />
            </>

        )
    }

} export default FavoriteCard