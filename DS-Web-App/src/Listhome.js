//This renders the user interface for the list of buttons that the user
//can use to navigate between each of the dining halls as well as
//the home page
//Thank to Chandler for the styling
import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';
import MediaQuery from 'react-responsive';
import { Header } from './components/Header';


export class Listhome extends React.Component{

	constructor() {
		super();
		
		this.state = {
		  showMenu: false,
		};
		
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	  }
	  
	  showMenu(event) {
		event.preventDefault();
		
		this.setState({ showMenu: true }, () => {
		  document.addEventListener('click', this.closeMenu);
		});
	  }
	  
	  closeMenu() {
		this.setState({ showMenu: false }, () => {
		  document.removeEventListener('click', this.closeMenu);
		});
	  }

	render() {
		/*
        Renders the quicknav bar at the top of the page
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the 5 quicknav buttons
        Raises:
            None
		*/
		
		return (
			
			<div>
				<MediaQuery query="(min-width:450px)">
					<ul class="quickNavList">
						<li class="quickNav">
							<NavLink to = "/" exact >
								Home
							</NavLink>
						</li>	
						<li class="quickNav">
							<NavLink to = "/9-10" exact onClick = {fetch("/9-10")}>
								9/10
							</NavLink>
						</li>
						<li class="quickNav">
							<NavLink to = "/cowell-stevenson" exact onClick = {fetch("/cowell-stevenson")}>
								Cowell/Stevenson
							</NavLink>
						</li>
						<li class="quickNav">
							<NavLink to = "/crown-merrill" exact onClick = {fetch("/crown-merrill")}>
								Crown/Merrill
							</NavLink>
						</li>
						<li class="quickNav">
							<NavLink to = "/porter-kresge" exact onClick = {fetch("/porter-kresge")}>
								Porter/Kresge
							</NavLink>
						</li>
						<li class="quickNav">
							<NavLink to = "/rcc-oakes" exact onClick = {fetch("/rcc-oakes")}>
								Rachel Carson/Oakes
							</NavLink>
						</li>
					</ul>
				</MediaQuery>

				<MediaQuery query="(max-width:450px)">
				<div class="dropdown">
					<button onClick={this.showMenu} class="dropbtn">Select A Page...</button>
					{
					this.state.showMenu
						? (
						<div class="dropdown-content">
							<NavLink to = "/" exact>
								Home
							</NavLink>
							<NavLink to = "/9-10" exact onClick = {fetch("/9-10")}>
								9/10
							</NavLink>

							<NavLink to = "/cowell-stevenson" exact onClick = {fetch("/cowell-stevenson")}>
								Cowell/Stevenson
							</NavLink>

							<NavLink to = "/crown-merrill" exact onClick = {fetch("/crown-merrill")}>
								Crown/Merill
							</NavLink>
					
							<NavLink to = "/porter-kresge" exact onClick = {fetch("/porter-kresge")}>
								Porter/Kresge
							</NavLink>
						
							<NavLink to = "/rcc-oakes" exact onClick = {fetch("/rcc-oakes")}>
								Rachel Carson/Oakes
							</NavLink>
						</div>
							)
						: (
						null
						  )
					}
				</div>
				</MediaQuery>
			</div>
		);
	}
}

