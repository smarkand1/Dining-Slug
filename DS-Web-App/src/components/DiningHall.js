import React from 'react';
import {NavLink} from 'react-router-dom';

//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class DiningHall extends React.Component {
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h1>
					<NavLink to="/" exact>
						<button>Home</button>
					</NavLink>
				</h1>
			</div>
		);
	}
}