import React from 'react'

//Suggestions class needs work done in order to correctly grab
//information from database or dummy data
export class Suggestions extends React.Component{
     Suggestions = (results) => {
        const options = results.Title.map(r => (
              <li key={results.Title}>
                {results.Title}
              </li>
         ))
    }


componentWillMount(){ 
    this.setState({
      results : require('./menu-ui')
    });
  }

  render(){
     return(
        <ul>{this.options}</ul> //Options SHOULD contain dummy data
     )
  }
}
export default Suggestions;

