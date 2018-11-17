//This component renders how busy the dining hall is based on googles
//popular times
import React from 'react';
import './Capacity.css';

const data = require('./dummyTimes.json');
const closeData = require('./capacity.json')

const times = data.diningHalls;
const hallsCloseTimes = closeData.Halls;


//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class Capacity extends React.Component {
    constructor(props){
        super(props);
    }
    
    findTimes(hall) {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const OPENING = 0;
        const CLOSING = 1;

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

        //get the popularity at the time from the data
        var diningHall = times[hall];
        var currDay = diningHall[currDay];
        var currTime = currDay[currHour];
        //convert popularity to a word
        if(currTime > 20){
            return (<div className="busy">Busy</div>);
        }
        else if(currTime > 10){
            return (<div className="moderate">Moderate</div>);
        }
        else if(currTime > 0){
            return (<div className="notBusy">Not Busy</div>);
        }
        else{
            return (<div className="notBusy">Not Available</div>);
        }
       
    }

    //Renders the entire dining hall page based on what page the user 
    //is in
    render(){
        var hall;
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct menu
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