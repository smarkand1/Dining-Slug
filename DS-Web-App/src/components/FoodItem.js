/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import '../App.css';
import Ratings from 'react-ratings-declarative';
import fs from 'fs';
var database = require('./database.json');

export class FoodItem extends React.Component {
    constructor(props){
        super(props);
        //I know this is probably a horrible way to test it, but right now I just have
        //Some select food items in a dummy.json file, which will be our test database
        //We will update the food Item's rating based on what is in our database
        //****What WE STILL NEED: ******
        // - We still need a way to have javascript pull information from the database
        // - I've been looking into ways for having the javascript file update the 
        //   database, most likely using $.post calls from jQuery to send values to the
        //   php file that updates the database.
        var foodName = this.props.itemName;
        var currentRating = 0;
        var foodIndex;
        var currentReviews = 0;
        //This just does some ugly linear search to find out whether or not
        //the food item is in the dummy database. Don't worry about how its 
        //Implemented because it'll most likely not do this in the 
        //final product 
        // UPDATE:
        //whoops, that didnt go so well did it?
        try {
            currentReviews = database[foodName].Reviews;
            currentRating = database[foodName].Rating / database[foodName].Reviews;
        } catch {
            currentReviews = 0;
            currentRating = 0;
        }

        this.state = {
            rating: currentRating,
            reviews: currentReviews,
            foodCode: foodIndex,
            database: database,
            alreadyReviewed: 0
        };
        this.changeRating = this.changeRating.bind(this);
    }

    //Change the rating based off of what the user puts in.
    //We will probably want to have the new rating be calculated by what the 
    //average is for the database.w
    changeRating(userRating){
        if(this.state.alreadyReviewed === 1){
            alert("You've already reviewed this item!");
            return;
        }
        var newReviews = this.state.reviews + 1;
        var newRating = (userRating + (this.state.rating * this.state.reviews))/ newReviews;
  
        //Here, we're gonna have to either update existing data to database.json or 
        //append new data to database.json
            database[this.props.itemName].Reviews = newReviews;
            database[this.props.itemName].Rating += userRating;
            fs.writeFileSync('./database.json', JSON.stringify(database, null, 2), function (err) {
                if(err) console.log("err");
                console.log(JSON.stringify(database, null, 2));
                console.log("Writing to ./database.json");
            });

        
        

        console.log("NEW RATING: ", newRating);
        this.setState({
            rating: newRating,
            reviews: newReviews,
            alreadyReviewed: 1
        });
    }

    render() {
        return(
            <div>
                <div className="divText">
                    Rating : <Ratings  
                        rating = {this.state.rating}
                        widgetRatedColors = 'rgb(253, 199, 0)'
                        widgetEmptyColors = 'rgb(203, 211, 227)'
                        widgetHoverColors = 'rgb(255, 219, 86)'
                        changeRating = {this.changeRating}
                        widgetDimensions = '2vmin'
                        widgetSpacings = "1vmin"
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings> 
                </div>
                Reviews: {this.state.reviews}
            </div>
        );
    }
}