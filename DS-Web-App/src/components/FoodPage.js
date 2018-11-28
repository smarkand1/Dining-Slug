import React from 'react';
import './Search.js';
import foodList from './food.json'

export class FoodPage extends React.Component {
    constructor(props){
        super(props);
        var food = this.props.location.pathname.substring(6);
        this.state = {
            preferences : foodList[food]["Preferences"],
            url : foodList[food]["URL"],
            diningHalls : foodList[food]["Dining Halls"]
        }
    }   
  
    //this.state["preferences"] is an array of vegan, soy, etc. items
    //This array could be empty

    //this.state["url"] is the url of the food items nutritional information
    
    //this.state["diningHall"] is an array of the dining halls the item is serving in
    //This array always has at least 1 element in it 

    //Any formatting will appear here.
    render(){
        return(
            <div>
                <div>
                    Food Item Name
                </div>
                <div>
                    {this.state["preferences"]}
                </div>
                <div>
                    <a href={this.state["url"]}>Click Here for Nutritional Info!</a>
                </div>
                <div>
                    {this.state["diningHalls"]}
                </div>
            </div>

        )

    }

}

export default FoodPage;
