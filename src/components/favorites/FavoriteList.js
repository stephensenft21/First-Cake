import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import APIManager from '../../modules/APIManager'
import CommentList from '../../components/comments/CommentList'
import Navi from '../nav/Navi'
class FavoriteList extends Component {

    state = {
        favorites: []
    }

    getData = () => {
        APIManager.getAllWithUserId("favorites",this.props.userId,"comments").then((allFavorites) => {
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


           <>
                  <Navi/>
                <div className='mainContainer'>
              
                {this.state.favorites.map((favorite,id) => (
                    <FavoriteCard
                        key={id}
                        favorite={favorite}
                        {...this.props}
                        getData={this.getData}
                    />
                ))}
                <CommentList 
                />
                </div>
               
            
</>

        )
    }
    
} export default FavoriteList