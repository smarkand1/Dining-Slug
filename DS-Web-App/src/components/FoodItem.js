/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import './FoodItem.css';
import Ratings from 'react-ratings-declarative';

export class FoodItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {rating: 0};
        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(newRating){
        this.setState({
            rating: newRating
        });
    }

    render() {
        return(
            <div>
                <button className = "listFood">
                    {this.props.itemName}
                    <Ratings  
                        rating = {this.state.rating}
                        widgetRatedColors = 'rgb(204, 204, 0)'
                        widgetEmptyColors = 'rgb(203, 211, 227)'
                        widgetHoverColors = 'rgb(255, 255, 0)'
                        changeRating = {this.changeRating}
                        widgetDimensions = '20px'
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </button>
                
            </div>
               
        );
    }
}