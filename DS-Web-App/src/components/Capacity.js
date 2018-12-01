//This component renders how busy the dining hall is based on google's popular times
import React from 'react';
import './Capacity.css';

//Reading in the data that was outputed by the webscraper
const data = require('./poptimes.json');
const closeData = require('./closedTimes.json')
const times = data.Halls;
const hallsCloseTimes = closeData.Halls;

export class Capacity extends React.Component {
    constructor(props){
        super(props);
    }
    
    findTimes(hall) {
        /*
        Finds out how the full the dining hall is on a given day and returns a one word description of it
        Arguments:
            Hall (int) - The corresponding value for the dining hall; 
            9/10 - 0, cowell-stevenson - 1, crown-merrill - 2, porter-kresge - 3, rcc-oakes - 4
        Returns:
            Activity (HTML Div) - HTML div containing the text with how busy a dining hall is
        Raises:
            None
        */
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const OPENING = 0;
        const CLOSING = 1;
        const SUNDAY = 0;
        const SATURDAY = 6;
        const MERRILL = 2;
        const PORTER = 3;
        const BUSY = 60;
        const MODERATE = 30;
        const NOT_BUSY = 0;

        //get the system time and the day name
        var d = new Date();
        var currDayNum = d.getDay()
        var currDay = weekday[currDayNum];
        var currHour = d.getHours();
        var currFullTime = currHour * 100 + d.getMinutes();

        //Determine if a dining hall is closed
        if(currFullTime < hallsCloseTimes[hall][currDayNum][OPENING] || hallsCloseTimes[hall][currDayNum][CLOSING] < currFullTime){
            return (<div className="busy">Closed</div>);
        }
        //Check if we're on the weekends
        if((currDayNum === SUNDAY || currDayNum === SATURDAY) && (hall === MERRILL || hall === PORTER)){
            return (<div className="busy">Closed</div>);
        }

        //get the popularity at the time from the data
        var diningHall = times[hall];
        var currDay = diningHall[currDay];
        var currTime = currDay[currHour];

        //convert popularity to a word
        if(currTime > BUSY){
            return (<div className="busy">Busy</div>);
        }
        else if(currTime > MODERATE){
            return (<div className="moderate">Moderate</div>);
        }
        else if(currTime > NOT_BUSY){
            return (<div className="notBusy">Not Busy</div>);
        }
        else{
            return (<div className="notBusy">Not Available</div>);
        }
       
    }

    //Renders specific information based on what dining hall page the user is on
    render(){
        /*
        Returns a component that lists how busy a specific dining hall is
        Arguments:
            None
        Returns:
            Activity (HTML Div) - an html div with inline styling. 
            Return possiblities are: Busy, Moderate, Not Busy, Not Available, Closed
        Raises:
            None
        */
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
        //Return the rendered component
        return(
            this.findTimes(hall)
        );
    }
}