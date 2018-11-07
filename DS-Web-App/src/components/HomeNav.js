//This renders the user interface for the list of buttons that the user
//can use to navigate between each of the dining halls as well as
//the home page
//Thank to Chandler for the styling
import React from 'react';
import {NavLink} from 'react-router-dom';
import './HomeNav.css';

export class HomeNav extends React.Component{
	render() {
		return (
			<div>
				<ul class="boxList">	
					<NavLink to = "/9-10" exact>
						<li class="boxButton">
							<div class="name">
								College 9/10	
							</div>
							<div class="capacity">
								Capacity	
							</div>
							<div class="rating">
								Rating	
							</div>
						</li>
					</NavLink>
					<NavLink to = "/cowell-stevenson" exact>
						<li class="boxButton">
							<div class="name">
								Cowell/Stevenson
							</div>
							<div class="capacity">
								Capacity	
							</div>
							<div class="rating">
								Rating	
							</div>
						</li>
					</NavLink>
					<NavLink to = "/crown-merrill" exact>
						<li class="boxButton">
							<div class="name">
								Crown/Merrill
							</div>
							<div class="capacity">
								Capacity	
							</div>
							<div class="rating">
								Rating	
							</div>
						</li>
					</NavLink>
					<NavLink to = "/porter-kresge" exact>
						<li class="boxButton">
							<div class="name">
								Porter/Kresge
							</div>
							<div class="capacity">
								Capacity	
							</div>
							<div class="rating">
								Rating	
							</div>
						</li>
					</NavLink>
					<NavLink to = "/rcc-oakes" exact>
						<li class="boxButton">
							<div class="name">
								Rachel Carson/Oakes
							</div>
							<div class="capacity">
								Capacity	
							</div>
							<div class="rating">
								Rating	
							</div>
						</li>
					</NavLink>	
				</ul>
			</div>
		);
	}
}
