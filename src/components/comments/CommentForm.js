import React, { Component } from 'react'
import { Col, Form, FormGroup, Button, Input, Image, Collapse } from 'reactstrap';
import API from '../../modules/APIManager'


class CommentForm extends Component {

    state = {
        zomatoResponseId: "",
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
        const newComment = {
            userId: this.state.userId,
            text: this.state.text,
            date: this.state.date,
        }
        API.post("comments", newComment)
            .then(() => this.props.history.push("/favorites"));
    }


    render() {
        return (
            <>
                <div> <Image>Logo goes Here</Image> </div>
                <div>Collapse Form was put here</div>
                <Collapse ds>
                    <Form onSubmit={this.constructNewMessage}>
                        <div>Comment</div>
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