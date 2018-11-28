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
  

  //Any formatting will appear here.
  //this.state.preferences is an array of vegan, soy, etc. items
  //This array could be empty
  
  //this.state.diningHall is an array of the dining halls the item is serving in
  //This array always has at least 1 element in it 
  render(){
      return(
          <div>
              This is the food page
              <div>
                  {this.state["preferences"]}
              </div>
              <div>
                  {this.state["url"]}
              </div>
              <div>
                  {this.state["diningHalls"]}
              </div>
          </div>
      )
  }

}

export default FoodPage;
