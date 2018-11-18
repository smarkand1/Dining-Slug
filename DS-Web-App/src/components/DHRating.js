//This component renders the ratings for the dining hall based on googles data
import React from 'react';
import Ratings from 'react-ratings-declarative';
import './DHRating.css'

const data = require('./dhRating.json');

const ratings = data.Halls;

export class DHRating extends React.Component {
    constructor(props){
        super(props);
    }
    
    findStars(hall) {
        const ratingObj = ratings[hall];
        return ratingObj
    }

    //Renders specific information based on what dining hall
    render(){
        var hall;
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct information
        switch(this.props.hall){
            case "9/10":
                hall = 0;
                break;
            case "Cowell/Stevenson":
                hall = 1;
                break;
            case "Crown/Merrill":
                hall = 2;
                break;
            case "Porter/Kresge":
                hall = 3;
                break;
            default:
                hall = 4;       
        }
        const ratingObj = this.findStars(hall);
        var ratings = ratingObj["Rating"];
        var reviews = ratingObj["Reviews"];
        //Return the rendered component
        return(
            <div className="dinRatings">
                <div> 
                    Rating: <Ratings  
                        rating = {ratings}
                        widgetRatedColors = 'rgb(253, 199, 0)'
                        widgetEmptyColors = 'rgb(203, 211, 227)'
                        widgetHoverColors = 'rgba(255, 219, 86, 0)'
                        widgetDimensions = '3vmin'
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </div>
                <div className="numReviews">
                    Google Reviews: {reviews}
                </div>
            </div>
        );
    }
}