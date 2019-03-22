//This component renders how busy the dining hall is based on google's popular times
import React from 'react';
import '../App.css';

//Reading in the data that was outputed by the webscraper
const closeData = require('./closedTimes.json')
const hallsCloseTimes = closeData.Halls;

export class Capacity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            diningHall : [],
            currentDay : [],
            currentTime: "",
            finalUI : null
        }
    }

    componentWillMount(){
        this.findTimes()
    }
    
    findTimes() {
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
        var UI;

        //Determine if a dining hall is closed
        if(currFullTime < hallsCloseTimes[hall][currDayNum][OPENING] || hallsCloseTimes[hall][currDayNum][CLOSING] < currFullTime){
            UI = (<div className="busy">Closed</div>);
            this.setState({finalUI : UI});
            return;

        }
        //Check if we're on the weekends
        if((currDayNum === SUNDAY || currDayNum === SATURDAY) && (hall === MERRILL || hall === PORTER)){
            UI = (<div className="busy">Closed</div>);
            this.setState({finalUI : UI});
            return;
        }


        //First, we need to fetch the data from the server
        fetch("/poptimes.json", {Method: "GET"})
            .then(res => res.json())
            .then((result) => {
                var dH = result.Halls[hall];
                var currrDay = dH[currDay];
                var currTime = currrDay[currHour];
                this.setState({
                    diningHall : dH,
                    currentDay : currrDay,
                    currentTime : currTime
                })
            })
            .then(() => {
                //get the popularity at the time from the data
                //convert popularity to a word
                if(this.state.currentTime > BUSY){
                    UI = (<div className="busy">Busy</div>);
                }
                else if(this.state.currentTime > MODERATE){
                    UI = (<div className="moderate">Moderate</div>);
                }
                else if(this.state.currentTime >= NOT_BUSY){
                    UI = (<div className="notBusy">Not Busy</div>);
                }
                else{
                    UI = (<div className="busy">Not Available</div>);
                }
                this.setState({finalUI : UI})
            })

        
        
       
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
        
        //Return the rendered component
        return this.state.finalUI === null ? "" : this.state.finalUI;
    }
}