import React from 'react';
import {NavLink} from 'react-router-dom';

export class DiningHall extends React.Component {
	render(){
		return(
			<div>
				<h1>Dining Hall!</h1>
				<h1>
					<NavLink to="/" exact>
						<button>Home</button>
					</NavLink>
				</h1>
			</div>
		);
	}
}