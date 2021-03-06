import React, { Component } from "react";
import APIManager from "../../modules/APIManager";

import { UserLoggedINSearchCardWithDetailsMaterialUI } from "../material/MaterialCards";
import { IconButtonsComment } from "../material/MaterialButtons";
import { Link } from "react-router-dom";
import style from "../../Style";
import { IconButtonsBack } from "../material/MaterialButtons";
import { IconButtonsEdit } from "../material/MaterialButtons";
class FavoriteDetails extends Component {
  state = {
    favorite: {}
  };

  componentDidMount() {
    APIManager.get(this.props.favoriteId, "favorites").then(response => {
      this.setState({
        favorite: response
      });
    });
  }

  render() {
    return (
      <>
        <div style={style.favoriteDetails}>
          <div
            onClick={() => {
              this.props.history.goBack(`/home/`);
            }}
          >
            {" "}
            <IconButtonsBack />
          </div>
          <div style={style.wrapper}>
            <img
              src={require(`../../Images/Project-Logo-Capstone.png`)}
              alt="My Logo"
              style={style.logoButton}
              onClick={() => {
                this.props.history.push(`/home/`);
              }}
            ></img>
            <UserLoggedINSearchCardWithDetailsMaterialUI
              favorite={this.state.favorite}
              {...this.props}
            />
          </div>
          <Link to={`/comments/${this.props.favoriteId}`}>
            {" "}
            <IconButtonsComment className="button" type="button" />
          </Link>
          <Link to={`/favorites/${this.props.favoriteId}`}>
            {" "}
            <IconButtonsEdit className="button" type="button" />
          </Link>
        </div>
      </>
    );
  }
}
export default FavoriteDetails;

{
  /* <div> <Card className="mainCard">
                        <CardBody>
                            <CardTitle>{`${this.state.favorite.name}`}</CardTitle>
                            <CardSubtitle>{this.state.favorite.address}</CardSubtitle>


                            <CardText> {`Cost for Two:   $${this.state.favorite.average_cost_for_two}`}  </CardText >
                            <CardText>{`Phone#:${this.state.favorite.phone_numbers}`}  </CardText >
                            <CardText>{`City:${this.state.favorite.city}`}  </CardText >
                            <CardText>{`Rating:${this.state.favorite.rating}`}  </CardText>
                            <CardText>{`Other user votes: ${this.state.favorite.votes}`}</CardText>

                            <Row className="buttonFlex">


                            </Row>
                        </CardBody>
                    </Card> */
}
