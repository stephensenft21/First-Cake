import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import API from '../../modules/APIManager'

class FavoriteList extends Component {

    state = {
        favorites: []
    }

    getData = () => {
        API.getAll("favoriteCakes").then((allFavorites) => {
            console.log("getData",allFavorites)
            this.setState({
                favorites: allFavorites
            })
        })
    }

    componentDidMount() {

        this.getData()
    }



    render() {
        return (


            <div className='sectionHeader'>
                <h1>List of Favorites</h1>
                <div className='mainContainer'>
                </div>
                {this.state.favorites.map(favorite => (
                    <FavoriteCard
                        key={favorite.id}
                        favorite={favorite}
                        {...this.props}
                        getData={this.getData}
                    />
                ))}
            </div>


        )
    }
    
} export default FavoriteList