//The goal of this component is to render the menu component of each
//dining hall component page 
//Each of the menus are pulled from the ./menu-ui.js file, which contains
//the constant that has the array of JSON objects
import React from 'react';
import {menuList, listColumn} from './Menu.css'
export class Menu extends React.Component { 
    constructor(props){
        super(props);
        this.state={ recipes :[] } 
    }

    //Grab the array of JSON objects from the text file
    componentWillMount(){
        this.setState({
            recipes : require('./menu-ui')
        });
    } 

    //Render the menu list
    renderList =() =>{
        //Determine which JSON objecy to look at based on what the user clicked
        let model = this.state.recipes[this.props.hallCode];
        let title = model.Title; //Dining hall title
        let menu = model.Menu;   //Dining hall menu, which is an array of more objects

        //We need to figure out how to separate the menu times into different columns
        //Render the menu
        let menuUI = menu.map((indMenu) => {
            let time = indMenu.Title; //Breakfast/lunch/Dinner/Late Night
            let foodArr = indMenu.Food; //Array of food items for the given time
            // Here we're gonna need to figure out how to separate the food lists so that
            // We can make them render as columns
            //Render the list of food items
            let foodUI = foodArr.map((foodItem) => {
                return(
                    <div>
                        <h3>{foodItem}</h3>
                    </div>
                );          
            });
            // If we have an empty array (IE no food being served at that time)
            // Do not render
            if(foodArr.length > 0){
                return (
                    <li>
                        <h1>{time}</h1>
                        {foodUI}
                    </li>
                );
            } else {
                return;
            }
        });
        return menuUI;
   }

    render() {
        return (
            <div className="wrapper">
                <ul>
                    {this.renderList()}
                </ul>  
            </div>
        );
    }
}
export default Menu;


