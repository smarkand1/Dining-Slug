/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import MediaQuery from 'react-responsive';
import '../App.css';
import Ratings from 'react-ratings-declarative';
import $ from 'jquery';



export class FoodItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            rating: 0,
            overallRating: 0,
            reviews: 0,
            isInDatabase: false,
            alreadyReviewed: 0
        };
        this.changeRating = this.changeRating.bind(this);
        this.populateRatings = this.populateRatings.bind(this);
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
  
        var totalRating = userRating + this.state.overallRating;
        //Now we need to update the database since there's been a change in rating. 
        //If the item is in the database, then we can update it with a post call
        //to the update url.
        //If its not in the database, we have to add it to the db with the new rating
        if(this.state.isInDatabase){
            $.ajax({
                type: "POST",
                url: '/dininghallfood/update',
                data: {
                        Name: this.props.itemName,
                        Rating: totalRating,
                        Reviews: newReviews
                      },
                
            })
        } else {
            $.ajax({ //Not in the database, add it to the database
                type: "POST",
                url: '/dininghallfood/add',
                data: {
                        Name: this.props.itemName,
                        Rating: totalRating,
                        Reviews: newReviews
                      },
                
            })
        }
        

        console.log("NEW RATING: ", newRating);
        this.setState({
            rating: newRating,
            overallRating: totalRating,
            reviews: newReviews,
            alreadyReviewed: 1
        });
    }
    
    //This gets called when a component is rendering. It'll be used to update the state when
    //a change in the current state is detected
    componentDidMount(){
        this.populateRatings();
    }

    //Make a get request to populate the information for each item that exists in the
    //Database
    populateRatings(){
        //console.log("Populating rating data");
        //Let's make a post call to the server
       
        try {
            var data = {};
            data.Name = this.props.itemName;
            //We want to send a post request to the server, and then
            //use that data to load each of the food items that we need for the menus
            fetch("/dininghallfood", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json()) //Grab the result from the post call
                .then( (result) => {
                    if(result[0] !== undefined){ //Make sure that we actually got data back. If we did, the item is in the db
                        this.setState({
                            rating: (result[0].Food_Star_Rating/result[0].Number_Of_Ratings),
                            overallRating: result[0].Food_Star_Rating,
                            reviews: result[0].Number_Of_Ratings,
                            isInDatabase: true
                        });
                    }
                })
        } catch {
            console.log('This food isnt in the database yet');
        }

    }

    render() {
        //Renders the food ratings. There are two query cases based
        //off of the size of the phone screen, and resizes the gaps
        //between each star accordningly
        return(
            <div>
                <MediaQuery query="(max-width:450px)">
                    <div className="divText">
                        Rating : <Ratings  
                            rating = {this.state.rating}
                            widgetRatedColors = 'rgb(253, 199, 0)'
                            widgetEmptyColors = 'rgb(203, 211, 227)'
                            widgetHoverColors = 'rgb(255, 219, 86)'
                            changeRating = {this.changeRating}
                            widgetDimensions = '5vmin'
                            widgetSpacings = "1vmin"
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings> 
                    </div>  
                </MediaQuery>

                <MediaQuery query="(min-width:450px)">
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
                </MediaQuery>
                Reviews: {this.state.reviews}
            </div>
        );
    }
}