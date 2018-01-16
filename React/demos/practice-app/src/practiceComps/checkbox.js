import React, { Component } from 'react';

export default class Checkbox extends Component {

getInitialState(){
	
}


  render() {
  	var msg;
  	 if(this.state.checked){
  	 	msg = 'checked'
  	 } else {
  	 	msg = 'unchecked'
  	 }

    return (
      <div className="checkbox-container">

      
      </div>
    );
  }
}
