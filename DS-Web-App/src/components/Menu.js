//The goal of this component is to render the menu component of each
//dining hall component page 
//Each of the menus are pulled from the ./dailyMenu.json file, which contains
//the constant that has the array of JSON objects
import React from 'react';
import { FoodItem } from './FoodItem'
import './Menu.css'
import Collapsible from 'react-collapsible'

const data = require('./dailyMenu.json')

export class Menu extends React.Component { 
    constructor(props){
        super(props);
        this.state={ recipes :[] } 
    }

    //Grab the array of JSON objects from the text file
    componentWillMount(){
        this.setState({
            recipes : data.data
        });
    } 

    //Render the menu list
    renderList =() =>{
        //Determine which JSON objecy to look at based on what the user clicked
        let model = this.state.recipes[this.props.hallCode];
        let title = model.Title; //Dining hall title
        let menu = model.Menu;   //Dining hall menu, which is an array of more objects

        //Render the menu
        let menuUI = menu.map((indMenu) => {
            let time = indMenu.Title; //Breakfast/lunch/Dinner/Late Night
            let foodArr = indMenu.Food; //Array of food items for the given time

            //Render the list of food items
            let foodUI = foodArr.map((foodItem) => {
                return(
                    <li>
                        <FoodItem itemName = {foodItem} />
                    </li>

                );          
            });
            // If we have an empty array (IE no food being served at that time)
            // Do not render
            if(foodArr.length > 0){
                return (
                    <Collapsible trigger = {<button className="collapsibleButton ">{time}</button>}>
                        <ul>
                            {foodUI}
                        </ul>
                    </Collapsible>
                );
            } else {
                return;
            }
        });
        return menuUI;
   }

    render() {
        return (
            <div class="wrapper">
                {this.renderList()}
            </div>
        );
    }
}
export default Menu;



