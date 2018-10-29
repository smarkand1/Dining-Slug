function findfood() {
    /*
    Searchs through array of food and creates a list as an element to be printed
    that contains the specified string within the search bar.
    Arguements:
        None
    Returns:
        List or Prints element
    Raises:
        None
    */
    var input; //Assign this to read input from seach bar
    var data = ["chicken", "cheese", "meat", "pasta", "Sausage"]; // This value will be static and always the same read from the 
    var output = []; // These values should display in a list style under the search bar
    input = "au"; //fill with search bar data
    output = filterItems(data, input)
    console.log(output) //Output the data
}

function filterItems(searchArray, query) {
    /*
    filters an array based on items
    Arguements:
        searchArray - (type = array of strings)
        query - string to look for within other strings
    Returns:
        Array - (type= array of strings) - array of strings that contains query
    Raises:
        None
    */
    return searchArray.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}

//Call find food whenever the search bar is interacted with. 
/*
Interactions: 
    Typing a letter
    Deleting a letter
    Clicking the seach bar
Clicking off the search bar should close the list
*/