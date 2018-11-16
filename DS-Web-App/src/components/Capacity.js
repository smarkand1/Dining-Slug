//This component dynamically renders the dining hall page and its 
//menu based on what button the user clicked on the user interface
import React from 'react';
import './Capacity.css';
const data = require('./dummyTimes.json');
const times = data.times;

//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class Capacity extends React.Component {
    constructor(props){
        super(props);
    }
    
    findTimes(hall) {
        //get the system time and convert it to california time
        var d = new Date
        var hours = d.getHours();
        console.log(hours)
        //get the popularity at the time from the data
        var curr_time = times[hall].times[hours];
        var toReturn = "";
        //convert popularity to a word
        if(curr_time > 20){
            return (<div className="busy">Busy</div>);
        }
        else if(curr_time > 10){
            return (<div className="moderate">Moderate</div>);
        }
        else{
            return (<div className="notBusy">Not Busy</div>);
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