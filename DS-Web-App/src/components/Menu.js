//The goal of this component is to render the menu component of each
//dining hall component page 
//Each of the menus are pulled from the ./dailyMenu.json file, which contains
//the constant that has the array of JSON objects
import React from 'react';
import { FoodItem } from './FoodItem'
import { NavLink} from 'react-router-dom';
import '../App.css';
import Collapsible from 'react-collapsible'

//const data = require('./dailyMenu.json')

export class Menu extends React.Component { 
    constructor(props){
        super(props);
        this.state={ 
            recipes :[],
            finalUI: null
        } 
        //this.renderList = this.renderList.bind(this);
    }

    //Grab the array of JSON objects from the text file
    componentWillMount(){
        
        this.renderList()
    } 

    

    //Render the menu list
    renderList(){
        /*
        Chooses which dining hall list to display from
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing up to 4 divs.
            Each div contains the items that the dining is serving at each meal time.
        Raises:
            None
        */
        //Determine which JSON objecy to look at based on what the user clicked

        fetch("/dailyMenu.json", {Method: "GET"})
            .then(res => res.json())
            .then((results) => {
                console.log(results.data);
                this.setState({
                    recipes : results.data
                })
            })
            .then(() => {
                let model =  this.state.recipes[this.props.hallCode];
                //let title = model.Title; //Dining hall title
                let menu = model.Menu;   //Dining hall menu, which is an array of more objects

                //Render the menu
                let menuUI = menu.map((indMenu) => {
                    let time = indMenu.Title; //Breakfast/lunch/Dinner/Late Night
                    let foodArr = indMenu.Food; //Array of food items for the given time

                    //Render the list of food items
                    let foodUI = foodArr.map((foodItem) => {
                        return(
                            <div className="foodItem">
                            <NavLink to = {`/food/${foodItem}`}>
                                <button className="foodButton">
                                    {foodItem}
                                </button>
                            </NavLink>
                            <FoodItem itemName = {foodItem} />
                            </div>
                        );          
                    });
                    // If we have an empty array (IE no food being served at that time)
                    // Do not render
                    if(foodArr.length > 0){
                        return (
                            <Collapsible trigger = {<button className="collapsibleButton ">{time}</button>}>
                                <ul className = "menuList">
                                    {foodUI}
                                </ul>
                            </Collapsible>
                        );
                    } else {
                        return;
                    }
                });
                this.setState({finalUI:menuUI})
            });
        
                /*const request = async () => {
                    const response = await fetch("/dailyMenu.json");
                    const json = await response.json();
                    console.log(json);
                    await this.setState({
                        recipes: json.data
                    })
                }*/
        
   }

    render() {
        
        /*
        Renders the drop down box for the menu on a dining hall page
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the items the dining hall is serving at a certain meal time
        Raises:
            None
        */
       
        return (
            <div class="wrapper">
                {this.state.finalUI === null ? "Loading menus..." : this.state.finalUI}
            </div>
        );
    }
}
export default Menu;



