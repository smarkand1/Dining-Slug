import React from 'react';
import './Search.js';

export class FoodPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          preferences : [],
          correspondingDiningHall : []
      }
    }   
  

  //Any formatting will appear here.
  render(){
  
    return(
      <div>
        {"This is the food page"}
      </div>
    )
  }

}
export default FoodPage;
