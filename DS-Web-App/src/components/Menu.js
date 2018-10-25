import React from 'react';
import ReactDOM from 'react-dom';

export class Menu extends React.Component{
	constructor(props){
		super(props);

	}
	renderList =() =>{
		let model = this.props.model;
		let title = model.Title;
		let menu = model.Menu;

		let menuUI = menu.map((m) => {
			let time = m.Title;
			let foodArr = m.Food;
			let foodUI = foodArr.map((f) => {
				return(
					<div>
						<h3>{f}</h3>
					</div>
				);					
			});
			return (
				<div>
					<h1>{time}</h1>
					{foodUI}
				</div>
			);
		});
		return menuUI;
	}
	render() {
		return (
			<div>
				Hola
				{this.renderList()}
			</div>
		);
	}
}