import React, { Component } from 'react';
import CommentCard from './CommentCard'
import API from '../../modules/APIManager'
import "./CommentList.css"
import { withRouter } from 'react-router'
class CommentList extends Component {

	state = {
		favorite: {},
		comments: []
	}



	getData = () => {
		API.getAll("comments").then((comments) => {
			this.setState({
				comments: comments
			})
		})
	}
  

	// HTML Example!!!!
//<div "first Prop"=(className)   "second Prop"=(type) ="button"  ='sectionHeader'>   Hey Matthew    <div/>

element = {
	type: "div, button",
	props: "className",
	props2: "type",
	children: 'sectionHeader' 
	//text content <div>Hey mathhew</div>
}


	componentDidMount() {
		let userToken = JSON.parse(localStorage.getItem("credentials")).id
		console.log("this is in the component on comment list", this.props)
		//got here now make call to get employee with animal
		//http://localhost:5002/favorites/1/comments?userId=1
		API.getCommentsFromOneFaveAndSingleUser("favorites", this.props.match.params.favoriteId, "comments", userToken)
			.then((APIResult) => {
				console.log("Hey this is API Result", APIResult)
				// let filteredResult = APIResult.filter(comment => {return  comment.userId = JSON.parse(localStorage.getItem("credentials")).id  })
				// console.log( "this is filtered result", filteredResult)
				this.setState({
					favorites: APIResult,
					comments: APIResult
				})
			})
	}

	render() {
		console.log(this.state.comments)
		return (
			<div className='sectionHeader'>
				<h4>: {this.state.favorite.name}</h4>
				<div className='mainContainer'>
				</div>
				{this.state.comments.map((comment, id) => (
					<CommentCard
						key={id}
						comment={comment}
						{...this.props}
						getData={this.getData}
					/>
				))}
			</div>

		);


	}



} export default withRouter(CommentList) 