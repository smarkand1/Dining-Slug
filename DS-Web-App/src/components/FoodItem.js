/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import './FoodItem.css';
import Ratings from 'react-ratings-declarative';
import $ from 'jquery';

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

    componentDidMount(){
        if(this.props.itemName === "Tator Tots"){
            this.populateRatings();
        }
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
        console.log("Sending poost request");
        $.ajax({
            type: "POST",
            url: '/sqlreq',
            data: {Food : "Big Food"},
            success: function(response){
                console.log(response);
            },
            failure: function(err){
                console.log("Awww shit");
            }
        })

        

        console.log("NEW RATING: ", newRating);
        this.setState({
            rating: newRating,
            reviews: newReviews,
            alreadyReviewed: 1
        });
    }

 

    //Make a get request to populate the information for each item that exists in the
    //Database
    populateRatings(){
        console.log("Populating rating data");
        try {
            var data = {};
            data.Name = this.props.itemName;
            $.ajax({
                type: "POST",
                url: '/dininghallfood',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    alert(res);
                }

            })
        } catch {
            console.log('This food isnt in the database yet');
        }
    }

    render() {
 
        return(
            <div>
                <button className = "listFood">
                    {this.props.itemName} | Reviews: {this.state.reviews}
                    <h3>
                        Rating: 
                        <Ratings  
                            rating = {this.state.rating}
                            widgetRatedColors = 'rgb(253, 199, 0)'
                            widgetEmptyColors = 'rgb(203, 211, 227)'
                            widgetHoverColors = 'rgb(255, 219, 86)'
                            changeRating = {this.changeRating}
                            widgetDimensions = '20px'
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings>
                    </h3> 
                </button>
                
            </div>
               
        );
    }
}