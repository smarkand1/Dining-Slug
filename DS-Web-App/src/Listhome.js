//This renders the user interface for the list of buttons that the user
//can use to navigate between each of the dining halls as well as
//the home page
//Thank to Chandler for the styling
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { DiningHall } from './components/DiningHall';
import './Listhome.css';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

export class Listhome extends React.Component{


	render() {
		return (
			<div>
				<ul class="quickNavList">
					<li class="quickNav">
						<NavLink to = "/" exact>
							Home
						</NavLink>
					</li>	
					<li class="quickNav">
						<NavLink to = "/9-10" exact>
							9/10
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/cowell-stevenson" exact>
							Cowell/Stevenson
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/crown-merrill" exact>
							Crown/Merill
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/porter-kresge" exact>
							Porter/Kresge
						</NavLink>
					</li>
					<li class="quickNav">
						<NavLink to = "/rcc-oakes" exact>
							Rachel Carson/Oakes
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}

