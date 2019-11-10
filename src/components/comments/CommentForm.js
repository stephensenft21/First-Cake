import React, { Component } from 'react'
import { Col, Form, FormGroup, Button, Input, Collapse } from 'reactstrap';
import Navi from '../nav/Navi'
import APIManager from '../../modules/APIManager'
import Moment from 'moment';



class CommentForm extends Component {

    state = {
        favoriteId: "",
        userId: null,
        collapse: false,
        text: "",
        date: ""
    }


    toggle = () => this.setState({ collapse: !this.state.collapse });


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = event => {
        event.preventDefault()
        if (this.state.text === '') {
            window.alert('Please add comment');
        } else {
          
            const newComment = {
                favoriteId: this.props.favoriteId,
                userId: this.props.userId,
                text: this.state.text,
                editTimeStamp: '',
                date: Moment(new Date()),
            }
            APIManager.post(newComment,"comments")
                .then(() => this.props.history.push(`/favorites/${this.props.favoriteId}`));
        }
    }

    render() {
        return (
            <>
              <Navi/>
            
                <div>Collapse Form was put here</div>
               
                    <Form onSubmit={this.constructNewMessage}>
                        <div>Add comment</div>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input onChange={this.handleFieldChange} type="text" name="comment" id="text" placeholder="Write a comment..." bsSize="lg" />
                            </Col>
                            <Button type="submit">
                            Submit</Button>
                        </FormGroup>
                    </Form>
               

            </>
        )
    }



}
export default CommentForm