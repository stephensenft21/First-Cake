import React, { Component } from "react";
import { Form } from "reactstrap";
import MaterialNavigation from "../nav/MaterialNavigation";
import APIManager from "../../modules/APIManager";
import Moment from "moment";
import {MaterialCommentForm} from '../material/MaterialCards'
import style from '../../Style'
import { FormControl } from '@material-ui/core';
import  {IconButtonsBack} from '../material/MaterialButtons'
class CommentForm extends Component {
  state = {
    favoriteId: "",
    userId: null,
    text: "",
    date: ""
  };

  toggle = () => this.setState({ collapse: !this.state.collapse });

  handleFieldChange = evt => {
  
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewMessage = event => {
    event.preventDefault();
    if (this.state.text === "") {
      window.alert("Please add comment");
    } else {
      const newComment = {
        favoriteId: this.props.favoriteId,
        userId: this.props.userId,
        text: this.state.text,
        editTimeStamp: "",
        date: Moment(new Date())
      };
      APIManager.post(newComment, "comments").then(() =>
        this.props.history.push(`/favorites/${this.props.favoriteId}`)
      );
    }
  };

  render() {
    return (
      <div style={style.mainContainer}>
        <div  onClick={() => { this.props.history.goBack(`/home/`) }}> <IconButtonsBack/></div>
       <div><button style={style.logoButton} type="button" onClick={() => { this.props.history.push(`/home/`) }}></button></div>
      
        
         
        <Form style={style.Form} onSubmit={this.constructNewMessage}>
        <div style={style.CommentLabels}>How was your date?</div>
         <MaterialCommentForm  handleLogin={this.handleLogin}
        handleFieldChange={this.handleFieldChange}  
      
        {...this.props} 
        value={this.state.text} />
        </Form>
      
      </div>
    );
  }
}
export default CommentForm;
