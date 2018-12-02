import React from 'react';
import { Search } from './Search';
import foodList from './food.json';
import { Listhome } from './../Listhome';
import { FoodItem } from './FoodItem';
import "../App.css"
import { NavLink } from 'react-router-dom';

export class FoodPage extends React.Component {
    constructor(props){
        super(props);
    }
  
    renderListPref =(prefs) =>{
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
        var preferences = prefs;
        //Render the list of food preferences
        let prefUI = preferences.map((pref) => {
            return(
                <div className="prefItem">
                    {pref}
                </div>
            );          
        });
        return prefUI;
   }

   renderListHalls =(halls) =>{
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
        var diningHalls = halls;
        //Render the list of food preferences
        let hallUI = diningHalls.map((hall) => {
            hall = hall.replace("Menu", "");
            hall = hall.replace("Ten", "Ten Dining Hall");
            var code;
            if(hall.includes("Nine")){
                code = "/9-10";
            }
            else if(hall.includes("Cowell")){
                code = "/cowell-stevenson";
            } 
            else if(hall.includes("Crown")){
                code = "/crown-merrill"
            } 
            else if(hall.includes("Porter")){
                code ="/porter-kresge"
            } 
            else{
                code ="/rcc-oakes"
            }
            return(
                <div>
                    <NavLink to = {code} exact className="hallItem">
                        {hall}
                    </NavLink>
                </div>
            );          
        });
        return hallUI;
    }

    //this.state["preferences"] is an array of vegan, soy, etc. items
    //This array could be empty

    //this.state["url"] is the url of the food items nutritional information
    
    //this.state["diningHall"] is an array of the dining halls the item is serving in
    //This array always has at least 1 element in it 

    //Any formatting will appear here.
    render(){
        var food = this.props.location.pathname.substring(6);
        this.state = {
            preferences : foodList[food]["Preferences"],
            url : foodList[food]["URL"],
            diningHalls : foodList[food]["Dining Halls"]
        }

        return(
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        Dining Slug
                        <img src ={require('./slug.png')}/>
                    </div>
                    <div className="gradient"></div>
                    <div className="topBar">
                        <Listhome/>
                        <div className="searchItem">
                            <Search searchWithCode = {5}/>
                        </div>
                    </div>

                    <div className="foodPageTitle">
                        {this.props.location.pathname.substring(6)}
                    </div>

                    <div className="wrapper">
                        <div className="leftBox">
                            <div className="leftBoxPrefs">
                                <u>About</u>
                                <div className="prefList">
                                    {this.renderListPref(this.state["preferences"])}
                                </div>
                            </div>
                            <div className="leftBoxURL">
                                <a href={this.state["url"]} target="_blank" className="nutURL">Click Here for Nutritional Info</a>
                            </div>

                        </div>
                        <div className="rightBox">
                            <div className="rightBoxServing">
                                <u>Serving At</u>
                                <div className="hallList">
                                    {this.renderListHalls(this.state["diningHalls"])}
                                </div>
                            </div>
                            <div className="rightBoxRating">
                                <FoodItem itemName = {this.props.location.pathname.substring(6)} className="foodItemRating"/>
                            </div>
                        </div>
                    </div>

                    <button class="backButton" onClick ={() => {this.props.history.goBack()}}>
                        Go Back
                    </button>
                </header>    
            </div>
        )
    }
}

export default FoodPage;