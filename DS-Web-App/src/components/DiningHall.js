import React from 'react';
import {NavLink} from 'react-router-dom';
import { Listhome } from './../Listhome';
import {NineTen} from './NineTen';


//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class DiningHall extends React.Component {
	//Currently I'm just rendering a static JSON object for every dininghall.
	//Im testing it using the RCC dining hall to get a feel for how it works
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
				  <NineTen/>
				  
				</header>
		  </div>
		);
	}
}
