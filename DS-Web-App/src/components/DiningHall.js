import React from 'react';
import {NavLink} from 'react-router-dom';
import { Listhome } from './../Listhome';


//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class DiningHall extends React.Component {
	render(){
		return(

			<div className="App">
			<header className="App-header">
			  <div className="title">
			    {this.props.name}
				<img src ={require('./slug.png')}/>
			  </div>
			  <div className="gradient"></div>
			  <Listhome/>
			</header>
		  </div>
		);
	}
}