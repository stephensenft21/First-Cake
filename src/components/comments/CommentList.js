import React, { Component } from 'react';
import CommentCard from './CommentCard'
import APIManager from '../../modules/APIManager'
import "./CommentList.css"
import { withRouter } from 'react-router'
import { Collapse } from '@material-ui/core';
import style from '../../Style'
class CommentList extends Component {

	state = {
		favorite: {},
		comments: [],
		Collapse: false,
	}









































	

	getData = () => {
		APIManager.getAll("comments").then((comments) => {
			this.setState({
				comments: comments
			})
		})
	}
  

// 	// HTML Example!!!!
// //<div "first Prop"=(className)   "second Prop"=(type) ="button"  ='sectionHeader'>   Hey Matthew    <div/>

// element = {
// 	type: "div, button",
// 	props: "className",
// 	props2: "type",
// 	children: 'sectionHeader' 
// 	//text content <div>Hey mathhew</div>
// }

dostuff =() => {
	let userToken = JSON.parse(sessionStorage.getItem("credentials")).id
	console.log("this is in the component on comment list", this.props)
	//got here now make call to get employee with animal
	//http://localhost:5002/favorites/1/comments?userId=1
	APIManager.getCommentsFromOneFaveAndSingleUser("favorites", this.props.match.params.favoriteId, "comments", userToken)
		.then((APIManagerResult) => {
			console.log("Hey this is APIManager Result", APIManagerResult)
			// let filteredResult = APIManagerResult.filter(comment => {return  comment.userId = JSON.parse(sessionStorage.getItem("credentials")).id  })
			// console.log( "this is filtered result", filteredResult)
			this.setState({
				favorites: APIManagerResult,
				comments: APIManagerResult
			})
		})

}


	componentDidMount() {
		this.dostuff()
	}

	render() {
		console.log(this.state.comments)
		return (




			
			<div style={style.wrapper} >
				<h4> {this.state.favorite.name}</h4>
				{this.state.comments.map((comment, id) => (
					<CommentCard
						key={id}
						comment={comment}
						{...this.props}
						getComments={this.dostuff}
					/>
				))}
			</div>

		);


	}



} export default withRouter(CommentList) 