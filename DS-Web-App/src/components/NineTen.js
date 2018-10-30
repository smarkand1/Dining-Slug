//Listing page for Crown, THIS IS called in DiningHall.js
import React from 'react'
     
export class NineTen extends React.Component { 
        constructor(props){
        super(props);
           this.state={ recipes :[] } 
        }
    
       
        componentWillMount(){
          this.setState({
            recipes : require('./menu-ui')
          });
        } 
        render() {
         return (
      
          <div className="App">
             <h2>Welcome to the 9/10 Listing!</h2>
             <dl>
             {this.state.recipes.map(recipe => {
                 return ( <div key={recipe.Menu}>
                          <div key={recipe.Hours}></div>
                          <div key={recipe.Title}></div>

                    <ul> {recipe.Title.map(function(Title,index)
                    {
                      return <tab key = {index}>{Title}</tab>
                    })}
                    </ul>     
                    <ul> {recipe.Hours.map(function(Hours,index)
                    {
                      return <tab key = {index}>{Hours}</tab>
                    })}
                    </ul>
                    <ul> {recipe.Menu.map(function(Menu,index)
                    {
                      return  <tab key = {index}>{Menu}</tab>
                    }
                    )}
                    </ul>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <dt>{recipe.Menu[2]}</dt>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <dt>{recipe.Menu[3]}</dt>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <hr></hr>
                    </div>
                   )
                 })
             }
          </dl>
          </div>
        );
     }
    }
    export default NineTen;
    


