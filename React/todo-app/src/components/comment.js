import React, { Component } from 'react';


export default class Comment extends Component {
	
    render () {

        	console.log(this.props);
        return ( 
        	<div className = "commentContainer" >
        	<div className = "commentText" > <p>{this.props.children}</p> < /div>
        	<button onClick ={this.props.edit} className="button-primary" > Edit < /button> 
        	<button onClick ={this.props.remove} className="button-danger" > Delete < /button>

            <
            /div>
        );
    }
}
