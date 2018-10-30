import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { DiningHall } from './components/DiningHall';
import './List.css';


export class List extends React.Component{
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
					<NavLink to = "crown-merrill" exact>
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
