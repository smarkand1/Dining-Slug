import React, {Component} from 'react'
import dataList from './food.json' //importing dataList
import {Card, CardBody, CardTitle} from 'mdbreact'; //Styling
import './Search.css'


export class Search extends Component {
    //Set initial States
    constructor(){
        super();
        this.closeMenu = this.closeMenu.bind(this);

        this.state = {
            query: "",
            showMenu: false //we will not show the menu if nothing has been clicked
        }
    }
    
   //Upon entering information into search bar...
    onchangeOne = e =>{
        this.setState({query: e.target.value}); //Log in target value

        e.preventDefault(); //prevent default event...
        
        if(e.target.value === "") //if target input is blank, don't show Menu
        {
            this.setState(
            {
                showMenu : false 
            }
        )}
        else
        {
            this.setState(
            {
                showMenu : true //Let us display Menu upon input of search bar
            },() =>
                {document.addEventListener('click',this.closeMenu) //if a click happens, close menu
            });
        }
    }

    //closeMenu will close based upon event passed in which is a click
    closeMenu(e){
        if (this.dropdownMenu === null || !this.dropdownMenu.contains(e.target)){
          this.setState({showMenu: false}, () => 
          {
            document.removeEventListener('click',this.closeMenu) //we will need to remove the event listener at this point
          });
        }
    }

    //This function will render our results
    renderResults = r =>{

        return <div className="col-md-3" style={{ marginTop : '10px' }}>
            <Card>
                <CardBody>
                    <button title={r}>{r.substring(0, 15)}{ r.length > 15 && "..."}</button>
                </CardBody>
            </Card>
        </div>
    }     

    render() {
      const {query} = this.state; //query is now set to the given state
      
      /*
      Declaration of a filtered variable that will look through the data.json
      list and create an array containing only those options that match
      the query result
      */
      const filteredItems = dataList.Food.filter(r=>
        {
            return r.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

       
      return (
        <div>
          <input
            class="searchBar"
            placeholder="Search..." //Search U.I bar
            ref={input => this.search = input}
            onChange={this.onchangeOne}
          />
            <div className = "dropdown" ref = {(e) =>{this.dropdownMenu = e}}> 
            {
                
                this.state.showMenu
                ? (
                    filteredItems.map(r => 
                    {
                      return this.renderResults(r) //print out results in a loop
                    })
                  ) 
                : (null)
            }
            </div>
        </div>
      )
    }
}
export default Search
   
