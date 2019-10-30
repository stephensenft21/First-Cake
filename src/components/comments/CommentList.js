import React, { Component } from 'react';
import CommentCard from './CommentCard'
import API from '../../modules/APIManager'
import "./CommentList.css"
class CommentList extends Component {

    state = {
        comments: []
    }

   

    getData = () => {
		API.getAll("comments").then((comments) => {
			this.setState({
				comments: comments
			})
		})
	}
	
	componentDidMount() {
		this.getData()
	}


    render() {
	
		return (
			<div className='sectionHeader'>
					<h1>Favorite Comments</h1>
					<div  className='mainContainer'>
				</div>
				{this.state.comments.map(comment => (
					<CommentCard
					key={comment.id}
					comment={comment}
					{...this.props}
					getData={this.getData}
					/>
					))}
					</div>
				
		);
	

                }



} export default CommentList 