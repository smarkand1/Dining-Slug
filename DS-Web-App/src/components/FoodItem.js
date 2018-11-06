/* This is gonna render a single food item, which will have its own properties
 * Such as:
 * -Food item name
 * -Rating (using a star system)
 */

import React from 'react';
import './../List.css';

export class FoodItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <button className = "listButton">{this.props.itemName}</button>
        );
    }
}