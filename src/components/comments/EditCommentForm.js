import React, { Component } from "react"
import { Button, Form, FormGroup, Input, Collapse, Col } from "reactstrap";
import API from "../../modules/APIManager";

class CommentEditForm extends Component {
    //set the initial state
    state = {
        userId: parseInt(sessionStorage.getItem("userId")),
        text: "",
        date: "",
        collapse: false
    };

    toggle = () => this.setState({ collapse: !this.state.collapse });

    // set state to value of input
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
    // update edited task object
    updateExistingComment = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true });
        const editedComment = {
            id: this.props.match.params.commentId,
            userId: this.state.userId,
            zomatoResponseId: this.state.zomatoResponseId,
            text: this.state.text,
            date: this.state.date,
        };
        // push edited task
        API.update("comments", editedComment)
            .then(() => this.props.history.push("/favorites"))
    }

    componentDidMount() {
        API.get("comments", this.props.match.params.commentId)
            .then(comment => {
                this.setState({
                    userId: comment.userId,
                    zomatoResponseId: comment.zomatoResponseId,
                    text: comment.text,
                    date: comment.date,

                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                <Collapse toggle={this.toggle}>
                    <Form onSubmit={this.constructNewMessage}>
                        <div>Comment</div>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input onChange={this.handleFieldChange} type="textarea" name="comment" id="text" placeholder="Write a comment..." bsSize="lg" />
                            </Col>
                            <Button type="submit">
                                Edi</Button>
                        </FormGroup>
                    </Form>
                </Collapse>
            </>
        );
    }

}
export default CommentEditForm