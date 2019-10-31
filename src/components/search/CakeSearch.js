import React, { Component } from 'react'
import {Col, Form, FormGroup, Button, Input} from 'reactstrap';
import APIManager from '../../modules/APIManager'
import AuthButtons from '../auth/AuthButtons'


class CakeSearch extends Component {

    state = {
        term: ""
    }


    // handleFieldChange = (evt) => {
    //     const stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }









    search = (evt) => {
        evt.preventDefault()
        let term = this.state.term;
        console.log(term)
        APIManager.searchZomato(term).then(allResults => {
            console.log(allResults)
        }
        )
    }




    // search = (term) => {
    //     if (this.props.user) {
    //         APIManager.searchZomato(term).then(allResults => {

    //             allResults.forEach(restaurant => {
    //                 APIManager.get(restaurant.id,"favoriteCakes")
    //             })
    //         })
    //     } else {

    //     }

    // }



    render() {
        // this.search("chocolate_cake")

            return (
<>
           <div><><AuthButtons/></></div>
           
           
            <div>
                
                <Form onSubmit={this.search}>
                  <div>Your First Date Awaits...</div>
                    <FormGroup>
                        <Col sm={10}>
                            <Input onChange={(event)=> {this.setState({term: event.target.value})}} type="search" name="Search for First Cake " id="term" placeholder="Search for First Cake " bsSize="lg"></Input>
                        </Col>
                    </FormGroup>
                    <div><Button  type="submit" color="secondary">Search</Button>{' '}</div>
                </Form>

            </div>
</>
        )


    }











} export default CakeSearch