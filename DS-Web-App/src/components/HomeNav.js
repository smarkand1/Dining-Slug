//This renders the user interface for the list of buttons on the home screen
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Capacity } from './Capacity'
import { DHRating } from './DHRating'
import './HomeNav.css';

export class HomeNav extends React.Component{
	render() {
		return (
			<div className="bigButtons">
				<ul className="boxList">
					<NavLink to = "/9-10" exact>
						<li className="boxItem">
							<div className="boxItemHelper">
								<div className="name">
									College 9/10	
								</div>
								<div className="capacity">
									Activity: <Capacity hall="9/10"/>	
								</div>
								<div className="rating">
									<DHRating hall="9/10"/>	
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink to = "/cowell-stevenson" exact>
						<li className="boxItem">
							<div className="boxItemHelper">
								<div className="name">
									Cowell/Stevenson
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Cowell/Stevenson"/>		
								</div>
								<div className="rating">
									<DHRating hall="Cowell/Stevenson"/>
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink to = "/crown-merrill" exact>
						<li className="boxItem">
							<div className="boxItemHelper">
								<div className="name">
									Crown/Merrill
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Crown/Merrill"/>			
								</div>
								<div className="rating">
									<DHRating hall="Crown/Merrill"/>	
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink to = "/porter-kresge" exact>
						<li className="boxItem">
							<div className="boxItemHelper">
								<div className="name">
									Porter/Kresge
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Porter/Kresge"/>
								</div>
								<div className="rating">
									<DHRating hall="Porter/Kresge"/>
								</div>
							</div>
						</li>
					</NavLink>
					<NavLink to = "/rcc-oakes" exact>
						<li className="boxItem">
							<div className="boxItemHelper">
								<div className="name">
									Rachel Carson/Oakes
								</div>
								<div className="capacity">
									Activity: <Capacity hall="Rachel Carson/Oakes"/>
								</div>
								<div className="rating">
									<DHRating hall="Rachel Carson/Oakes"/>
								</div>
							</div>
						</li>
					</NavLink>	
				</ul>
			</div>
		);
	}
}
