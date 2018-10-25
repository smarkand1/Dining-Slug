import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from './Menu';

//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class DiningHall extends React.Component {
	//Currently I'm just rendering a static JSON object for every dininghall.
	//Im testing it using the RCC dining hall to get a feel for how it works
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h1>
					<NavLink to="/" exact>
						<button>Home</button>
					</NavLink>
				</h1>
				<Menu
					model = {{
						"Title": "Rachel Carson/Oakes Dining Hall",
						"Date": "Menus for Friday, October 19, 2018",
						"Hours": "Hours go here",
						"Menu": [
							{
								"Title": "Breakfast",
								"Food": ["Belgian Waffles", "Bob's Pancakes", "Cage Free Scrambled Eggs", "Cajun Roasted Red Potatoes", "Chicken Bacon", "Eggbeaters Scramble", "Hard-boiled Cage Free Eggs", "Oatmeal Gluten-Free", "Soyrizo Tofu Scramble", "Almond Bear Claws", "Oatbran Apple Muffin", "Pineapple Coconut Muffin", "Vegan Peanut Granola", "Bell Peppers", "Cage Free Eggs", "Cage Free Omelette Bar", "Cheddar Cheese", "Feta Cheese", "Fresh Organic Spinach", "Fresh Tomato", "Jalapeno", "Onions", "Oven Roasted Turkey", "Sliced Olived", "Smoked Ham"]
							},
							{
								"Title": "Lunch",
								"Food": ["N.E.Clam Chowder", "Tomato Bisque Soup", "Fiesta Taquito Salad", "British Burger", "Island BBQ Chicken", "Oven Roasted Chicken Thigh", "Steamed Rice", "Bombay Chicken Pizza", "Cheese Pizza", "Coconut Basmati Rice", "Steamed Seasonal Vegetables", "Chocolate Chip Cookies", "Lemon Cream Cheese Cup Cakes", "Mexican Brownie", "UCSC Bakery French Rolls", "BAR Wings", "BBQ Wings", "Condiments", "Hawaiian Coleslaw", "Hot 'N Spicy Wings", "Teriyaki Glaze Wings", "Vegan Baked Beans", "Vegan Tenders"]
							},
							{
								"Title": "Dinner",
								"Food": ["N.E.Clam Chowder", "Tomato Bisque Soup", "Cajun Meatloaf", "Oven Roasted Chicken Thigh", "Steamed Rice", "Bombay Chicken Pizza", "Cheese Pizza", "Cajun Rice with Red Beans", "Steamed Seasonal Vegetables", "Mexican Brownie", "UCSC Bakery French Rolls", "Vegan Blackberry Pie", "Argentinian Roasted Chicken", "Black Beans", "Braised Kale with Crispy Shallots", "Condiments", "Quinoa with Lemon and Thyme", "Roasted Corn"]
							},		{
								"Title": "Late Night",
								"Food": []
							}
						]
					}}
				/>
			</div>
		);
	}
}