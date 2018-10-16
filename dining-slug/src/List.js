import React from 'react';
import ReactDOM from 'react-dom';

export class List extends React.Component{
	render() {
		return (
			<div>
				<h1>
					<button>9/10</button>
				</h1>
				<h2>
					<button>Cowell/Stevenson</button>
				</h2>
				<h3>
					<button>Crown/Merill</button>
				</h3>
				<h4>
					<button>Porter/Kresge</button>
				</h4>
				<h5>
					<button>Rachel Carson/Oakes</button>
				</h5>
			</div>
		);
	}
}
