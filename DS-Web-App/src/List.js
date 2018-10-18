import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { DiningHall } from './components/DiningHall';

export class List extends React.Component{
	render() {
		return (
			<div>
				<h1>List!</h1>
				<ul>
					<li>
						<NavLink to = "/9-10" exact>
							<button>9/10</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/cowell-stevenson" exact>
							<button>Cowell/Stevenson</button>
						</NavLink>
					</li>
					<li>
					<NavLink to = "crown-merrill" exact>
							<button>Crown/Merrill</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/porter-kresge" exact>
							<button>Porter/Kresge</button>
						</NavLink>
					</li>
					<li>
						<NavLink to = "/rcc-oakes" exact>
							<button>Rachel Carson/Oakes</button>
						</NavLink>
					</li>	
				</ul>
			</div>
		);
	}
}
