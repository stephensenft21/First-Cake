import React, { Component } from "react"
import { Button, Form, FormGroup, Input, Col } from "reactstrap";
import APIManager from "../../modules/APIManager";
import moment from 'moment';
class EditCommentForm extends Component {
    //set the initial state
    state = {
        userId: parseInt(sessionStorage.getItem("userId")),
        commentId: "",
        text: "fffff",
        date: "",
        collapse: false,
        favoriteId: ""
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
            editTimeStamp: moment(new Date()),
            text: this.state.text

        };
        // push edited task
        APIManager.updateComment(editedComment, "comments",this.props.match.params.commentId)
            .then(() => this.props.history.push(`/favorites/${this.state.favoriteId}`))
    }

    componentDidMount() {
        APIManager.get(this.props.commentId, "comments")

            .then(comment => {
                console.log(comment)
                this.setState({
                    favoriteId: comment.favoriteId,
                    userId: comment.userId,
                    text: comment.text,
                    editTimeStamp: moment(new Date()),
                    loadingStatus: false,
                    commentId: comment.commentId,

                });
            });
    }



    // render JSX to be displayed on the DOM
    render() {
        return (
            <>
                {/* <Collapse toggle={this.toggle}> */}
                <Form onSubmit={this.updateExistingComment}>
                    <div>Comment</div>
                    <FormGroup row>
                        <Col sm={10}>
                            <Input onChange={this.handleFieldChange} value={this.state.text} type="text" name="comment" id="text" placeholder="Make changes..." bsSize="lg" />
                        </Col>
                        <Button type="submit">
                            Edit</Button>
                    </FormGroup>
                </Form>
                {/* </Collapse> */}
            </>
        );
    }

}
export default EditCommentForm