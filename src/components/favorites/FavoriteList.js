import React, { Component } from "react";
import FavoriteCard from "./FavoriteCard";
import APIManager from "../../modules/APIManager";
import CommentList from "../../components/comments/CommentList";
import Navi from "../nav/Navi";
import style from "../../Style";
import { IconButtonsBack } from "../material/MaterialButtons";
import SimpleBottomNavigation from '../nav/MaterialNavigation'
class FavoriteList extends Component {
  state = {
    favorites: []
  };

  getData = () => {
    APIManager.getAllWithUserId(
      "favorites",
      this.props.userId,
      "comments"
    ).then(allFavorites => {
      console.log("getData", allFavorites);
      this.setState({
        favorites: allFavorites
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <SimpleBottomNavigation/>
        <div style={style.mainCard}>
      
        <div  onClick={() => { this.props.history.goBack(`/home/`) }}> <IconButtonsBack/></div>
        <div>
          {this.state.favorites.map((favorite, id) => (
              <FavoriteCard
              key={id}
              favorite={favorite}
              {...this.props}
              getData={this.getData}
              />
              ))}
          <CommentList />
          </div>
        </div>
      </>
    );
  }
}
export default FavoriteList;
