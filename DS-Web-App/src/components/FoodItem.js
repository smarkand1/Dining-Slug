/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import './FoodItem.css';
import Ratings from 'react-ratings-declarative';
import $ from 'jquery';


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
        var foodJSON = require('./dummy.json'); //Dummy database
        var foodIndex;
        var currentReviews = 0;
        //This just does some ugly linear search to find out whether or not
        //the food item is in the dummy database. Don't worry about how its 
        //Implemented because it'll most likely not do this in the 
        //final product
        for(foodIndex = 0; foodIndex < foodJSON.length; foodIndex++){
            if(foodJSON[foodIndex].Food === this.props.itemName){
                currentRating = (foodJSON[foodIndex].Rating / foodJSON[foodIndex].Reviews);
                currentReviews = (foodJSON[foodIndex].Reviews); //Number of reviews
                console.log("Rating = ", currentRating);
                break;
            }
        }
        this.state = {
            rating: currentRating,
            reviews: currentReviews,
            foodCode: foodIndex,
            foodJSON: foodJSON,
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
        /* THIS IS WHAT A POSSIBLE CALL TO THE PHP FILE MAY LOOK LIKE 
            -This may only work on the server itself but i'm not 100% sure
        $.ajax({
            type: 'POST',
            url: './poopoo.php',
            dataType: "json",
            data: {
                "Food" : this.props.itemName,
                "Rating" : userRating,
                "Reviews" : newReviews
            },
            success: function(data){
                console.log(data);
            }
        }); */
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