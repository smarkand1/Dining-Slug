import React from 'react';
import './Search.js';

export class FoodPage extends React.Component {
  constructor(props){
  super(props);
   this.state = {
     preferences :[],
     correspondingDiningHall : []
   }
  }   
  

  //Any formatting will appear here.
  render(){
  
    return(
      alert('Made it into Food Page')
    )
  }

}
export default FoodPage;
