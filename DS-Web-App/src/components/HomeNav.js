//This renders the user interface for the list of buttons on the home screen
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Capacity } from './Capacity'
import { DHRating } from './DHRating'
import '../App.css';

export class HomeNav extends React.Component{
	render() {
		/*
		Renders the buttons on the home page for the website with buttons to go to each dining hall. 
		Each button contains information about the dining hall including the activity, name, and ratings
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the home page button layout rendering. Components: Capcity.js, dhRating.js, HomeNav.js
        Raises:
            None
        */
		return (
			<div className="bigButtons">
				<ul className="boxList">
					<li className="boxItem">
						<NavLink to = "/9-10" exact>
							<div className="boxItemHelper">
								<div className="name">
									College 9/10	
								</div>
								<div className="capacity">
									Activity: <Capacity hall="9/10"/>	
								</div>
							</div>
						</NavLink>
						<div className="rating">
							<DHRating hall="9/10"/>	
						</div>
					</li>
					<li className="boxItem">
						<NavLink to = "/cowell-stevenson" exact>
							<div className="boxItemHelper">
								<div className="name">
									Cowell/Stevenson
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Cowell/Stevenson"/>		
								</div>
							</div>
						</NavLink>
						<div className="rating">
							<DHRating hall="Cowell/Stevenson"/>
						</div>
					</li>
					<li className="boxItem">
						<NavLink to = "/crown-merrill" exact>
							<div className="boxItemHelper">
								<div className="name">
									Crown/Merrill
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Crown/Merrill"/>			
								</div>
							</div>
						</NavLink>
						<div className="rating">
							<DHRating hall="Crown/Merrill"/>	
						</div>
					</li>
					<li className="boxItem">
						<NavLink to = "/porter-kresge" exact>
							<div className="boxItemHelper">
								<div className="name">
									Porter/Kresge
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Porter/Kresge"/>
								</div>
							</div>
						</NavLink>
						<div className="rating">
							<DHRating hall="Porter/Kresge"/>
						</div>
					</li>
					<li className="boxItem">
						<NavLink to = "/rcc-oakes" exact>
							<div className="boxItemHelper">
								<div className="name">
									Rachel Carson/Oakes
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Rachel Carson/Oakes"/>
								</div>
							</div>
						</NavLink>	
						<div className="rating">
							<DHRating hall="Rachel Carson/Oakes"/>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
