//This component renders the ratings for the dining hall based on googles data
import React from 'react';
import Ratings from 'react-ratings-declarative';
import '../App.css'

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
            final_UI: null,
            url: ""
        };
        this.renderDHRating = this.renderDHRating.bind(this);
    }
    
    //This function checks to see if we have an update to the state
    //It is part of the React app's lifecycle, and is automatically run 
    //once the components first render
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
                var url;
                //Fill the appropriate dining hall code and url based on the name of the
                //dining hall. URLs are links to the google reviews for each dining hall
                switch(this.props.hall){
                    case "9/10":
                        hall = 0;
                        url = "https://www.google.com/search?q=college+nine+and+ten+dining+hall&oq=college+nine+and+ten+dining+hall&aqs=chrome..69i57j0j69i60l3j0.5790j1j4&sourceid=chrome&ie=UTF-8#lrd=0x808e410a5df1fe0d:0x5f5ceef5d651e6ca,1,,,";
                        break;
                    case "Cowell/Stevenson":
                        hall = 1;
                        url = "https://www.google.com/search?q=cowel+stevenson+dining+hall&oq=cowel+stevenson+dining+hall&aqs=chrome..69i57j0j69i60l2.3084j1j9&sourceid=chrome&ie=UTF-8#lrd=0x808e41a685745501:0x4a7d82b38d1bc7bc,1,,,";
                        break;
                    case "Crown/Merrill":
                        hall = 2;
                        url = "https://www.google.com/search?q=crown+merrill+dining+hall&oq=crown+merrill&aqs=chrome.0.0j69i57j0l4.2274j1j9&sourceid=chrome&ie=UTF-8#lrd=0x808e41a75b2ff18b:0x8f6e287bd3f7ade3,1,,,";
                        break;
                    case "Porter/Kresge":
                        hall = 3;
                        url = "https://www.google.com/search?ei=u4MBXImCNcGf0gLwoquABQ&q=porter+kresge+dining+hall&oq=porter+kresge+dining+hall&gs_l=psy-ab.3..35i39j38.388.1286..1459...0.0..0.270.1052.0j2j3......0....1..gws-wiz.CXLzzyZhmGA#lrd=0x808e419e8ff298a9:0xc0cc7592fcea39a0,1,,,";
                        break;
                    default:
                        hall = 4;   
                        url = "https://www.google.com/search?q=oaks+rachel+carson+dinig+hall&oq=oaks+rachel+carson+dinig+hall&aqs=chrome..69i57.3828j1j9&sourceid=chrome&ie=UTF-8#lrd=0x808e419940c684cb:0x27fb53a425d50bfd,1,,,";    
                }
                const thisHallRating = results.Halls[hall];
                //set the state from the information that we obtained from the fetch call
                this.setState({
                    ratings : results.Halls,
                    dhRating : thisHallRating.Rating,
                    reviews: thisHallRating.Reviews,
                    url: url
                });
            })
            .then(() => {
                //Render the UI based on the state that was set by the fetch call
                let UI = (
                    <div>
                        <div> 
                            Rating: <Ratings
                                 rating = {this.state.dhRating}  
                                 widgetRatedColors = 'rgb(253, 199, 0)'
                                 widgetEmptyColors = 'rgb(203, 211, 227)'
                                 widgetHoverColors = 'rgba(255, 219, 86, 0)'
                                 widgetDimensions = '3vmin'
                                 widgetSpacings = "1vmin"
                            >
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                            </Ratings>
                        </div>
                        <a href={this.state.url} target="_blank" className="reviews">
                            Google Reviews: {this.state.reviews}
                        </a>
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
        //The fetch call runs asynchronously; We need to check whether the data provided by the call was
        //ready during the first render
        return(
            <div className="dinRatings">
                {this.state.final_UI ===null ? "Loading reviews.." : this.state.final_UI}
            </div>
        );
    }
}