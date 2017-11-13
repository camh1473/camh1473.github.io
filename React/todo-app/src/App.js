import React, { Component } from 'react';
import './App.css';

//components
import Comment from './components/comment'

export default class App extends Component {


  render() {
  	const title = "To Do Task";
  	const edit = function() {
		alert('editing');
	}
	const remove = function() {
		alert('deleting');
	}
    return (
      <div className="App">

      <Comment edit={edit} title={title}>Hello there Cam</Comment>
      <Comment edit={edit} remove={remove} title={title}>New Task</Comment>
      <Comment edit={edit} remove={remove} title={title}>Third Task</Comment>
      <Comment edit={edit} remove={remove} title ={title}>4th task</Comment>


      
      </div>
    );
  }
}
