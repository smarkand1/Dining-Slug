//This component renders the ratings for the dining hall based on googles data
import React from 'react';
import Ratings from 'react-ratings-declarative';
import './DHRating.css'

//Data from googles api containing the ratings and reviews information
const data = require('./dhRating.json');
const ratings = data.Halls;

export class DHRating extends React.Component {
    constructor(props){
        super(props);
    }
    
    findStars(hall) {
        /*
        Returns the number of stars a dining hall has
        Arguments:
            Hall (int) - hall number that corresponds to a dining hall
            9/10 - 0, cowell-stevenson - 1, crown-merrill - 2, porter-kresge - 3, rcc-oakes - 4
        Returns:
            ratingObj (Dictionary) - has the overall number of stars a dining hall has and the number of reviews the dining hall has
        Raises:
            None
        */
        const ratingObj = ratings[hall];
        return ratingObj
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
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct information
        var hall;
        var url;
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

        //The ratings and reviews for each dining hall and the number of stars
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
                <a href={url} target="_blank" className="reviews">
                    Google Reviews: {reviews}
                </a>
            </div>            
        );
    }
}