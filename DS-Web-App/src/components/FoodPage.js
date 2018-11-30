import React from 'react';
import { Search } from './Search';
import foodList from './food.json';
import { Listhome } from './../Listhome';
import { FoodItem } from './FoodItem';
import "./FoodPage.css"

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
                <li>
                    {pref}
                </li>

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
            return(
                <li>
                    {hall}
                </li>

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
                    <div className="wrapperr">
                        <ul className="leftBoxList">
                            <li className="leftBoxListItem">
                                <u>
                                    Contains
                                </u>
                                <ul className="prefList">
                                    {this.renderListPref(this.state["preferences"])}
                                </ul>
                            </li>
                            <li className="leftBoxListItem">
                                <a href={this.state["url"]} target="_blank">Click Here for Nutritional Info!</a>
                            </li>

                        </ul>
                        
                        <ul className="rightBoxList">
                            <li className="rightBoxListItem">
                                <u>
                                    Serving At
                                </u>
                                <ul className="hallList">
                                    {this.renderListHalls(this.state["diningHalls"])}
                                </ul>
                            </li>
                            <li className="rightBoxListItem">
                                <FoodItem itemName = {this.props.location.pathname.substring(6)} />
                            </li>
                        </ul>
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
