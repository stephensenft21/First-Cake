import React, { Component } from "react"
import { Button, Form, FormGroup, Input,Col } from "reactstrap";
import API from "../../modules/APIManager";
import moment from 'moment';
class CommentEditForm extends Component {
    //set the initial state
    state = {
        userId: parseInt(localStorage.getItem("userId")),
        text: "fffff",
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
            favoriteCakeId: this.state.favoriteCakeId,
            editTimeStamp: moment(new Date()),
            text: this.state.text,
            date: this.props.date,
        };
        // push edited task
        API.update(editedComment,"comments")
            .then(() => this.props.history.push("/favorites"))
    }

    componentDidMount() {
        API.get( this.props.match.params.commentId,"comments")
        
            .then(comment => {
            console.log(comment)
                this.setState({
                    userId: comment.userId,
                    favoriteCakeId: comment.favoriteCakeId,
                    text: comment.text,
                    date: this.state.date,
                    loadingStatus: false

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
                                <Input onChange={this.handleFieldChange}  value={this.state.text}type="textarea" name="comment" id="text" placeholder="Make changes..." bsSize="lg" />
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
export default CommentEditForm