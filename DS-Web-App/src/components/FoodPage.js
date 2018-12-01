import React from 'react';
import { Search } from './Search';
import foodList from './food.json';
import { Listhome } from './../Listhome';

export class FoodPage extends React.Component {
    constructor(props){
        super(props);
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
            preferences : foodList[food]["Preferences"].join(", "),
            url : foodList[food]["URL"],
            diningHalls : foodList[food]["Dining Halls"].join(", ")
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
                    <h1>
                        {this.props.location.pathname.substring(6)}
                    </h1>
                    <h2>
                        Food Contains: {this.state["preferences"]}
                    </h2>
                    <h2>
                        <a href={this.state["url"]} target="_blank">Click Here for Nutritional Info!</a>
                    </h2>
                    <h2>
                        You can find this food at: {this.state["diningHalls"]}
                    </h2>
                    <div>
                     <button class="diningslugbutton" onClick ={() => {this.props.history.goBack()}}>Go Back</button>
                    </div>
                    </header>

                    
            </div>

        )

    }

}

export default FoodPage;
