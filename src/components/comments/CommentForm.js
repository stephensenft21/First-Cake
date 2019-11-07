import React, { Component } from 'react'
import { Col, Form, FormGroup, Button, Input, Collapse } from 'reactstrap';
import API from '../../modules/APIManager'
import Moment from 'moment';


class CommentForm extends Component {

    state = {
        favoriteCakeId: "",
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
            let userId = parseInt(localStorage.getItem('credentials'));
            const newComment = {
                favoriteCakeId: this.state.favoriteCakeId,
                userId: userId,
                text: this.state.text,
                editTimeStamp: '',
                date: Moment(new Date()),
            }
            API.post(newComment,"comments")
                .then(() => this.props.history.push("/favorites"));
        }
    }

    render() {
        return (
            <>
            
                <div>Collapse Form was put here</div>
                <Collapse key={this.toggle}>
                    <Form onSubmit={this.constructNewMessage}>
                        <div>Add comment</div>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input onChange={this.handleFieldChange} type="textarea" name="comment" id="text" placeholder="Write a comment..." bsSize="lg" />
                            </Col>
                            <Button type="submit">
                                Post</Button>
                        </FormGroup>
                    </Form>
                </Collapse>

            </>
        )
    }



}
export default CommentForm