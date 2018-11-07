//This renders the user interface for the list of buttons that the user
//can use to navigate between each of the dining halls as well as
//the home page
//Thank to Chandler for the styling
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


export class HomeNav extends React.Component{
	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink to = "/9-10" exact>
							<button class = "listButton">9/10</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/cowell-stevenson" exact>
							<button class = "listButton">Cowell/Stevenson</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/crown-merrill" exact>
							<button class = "listButton">Crown/Merrill</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/porter-kresge" exact>
							<button class = "listButton">Porter/Kresge</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/rcc-oakes" exact>
							<button class = "listButton">Rachel Carson/Oakes</button>
						</NavLink>
					</li>	
				</ul>
			</div>
		);
	}
}
