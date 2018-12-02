//This component renders the ratings for the dining hall based on googles data
import React from 'react';
import Ratings from 'react-ratings-declarative';
import './DHRating.css'

//Data from googles api containing the ratings and reviews information
//const data = require('./dhRating.json');
//const ratings = data.Halls;

export class DHRating extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ratings: 0,
            dhRating: 0,
            reviews: 0,
            UI_Ready: false,
            final_UI: null
        };
        this.renderDHRating = this.renderDHRating.bind(this);
    }
    

    componentWillMount(){
        this.renderDHRating()
    }

    renderDHRating(){
        /*
        Renders the rating and number of reviews a dining hall has 
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the ratings viewed as stars and the number of reviews based on Googles data
        Raises:
            None
        */


        fetch("/dhRating.json", {Method: "GET"})
            .then(res => res.json())
            .then((results) => {
                //We'll need to pass this hall code code the menu component so that 
                //we can render the correct information
                var hall;
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

                console.log("Hall number ", hall);
                console.log(results.Halls[hall]);
                const thisHallRating = results.Halls[hall];
                this.setState({
                    ratings : results.Halls,
                    dhRating : thisHallRating.Rating,
                    reviews: thisHallRating.Reviews
                });
            })
            .then(() => {
                let UI = (
                    <div>
                        <div> 
                            Rating: <Ratings  
                                rating = {this.state.dhRating}
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
                            Google Reviews: {this.state.reviews}
                        </div>
                    </div>
                );
                this.setState({final_UI: UI});
                console.log("UI is ready");
            });
    }

    displayRatings(){
        var x = document.getElementById("");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    //Renders specific information based on what dining hall
    render(){
        /*
        Renders the rating and number of reviews a dining hall has 
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the ratings viewed as stars and the number of reviews based on Googles data
        Raises:
            None
        */
        
        //Return the rendered component
        return(
            <div className="dinRatings">
                {this.state.final_UI ===null ? "Loading reviews.." : this.state.final_UI}
            </div>
        );
    }
}