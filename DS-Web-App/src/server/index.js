const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors'); //Allow for cross origin resource sharing

const app = express();

const bodyParser = require('body-parser'); //needed for parsing requests from client

app.use(bodyParser.json()); //We'll need this to parse the data we get for post calls
app.use(bodyParser.urlencoded({extended: true}));

//Set up the connection to mysql.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'diningslug'
});

//make that dope connection
connection.connect(err => {
    if(err) {
        return err;
    }
});


//serve the state files from the React app
app.use(express.static("dist"));

app.use(cors()); //Allows us to use cross references between db and javascript

//An api endpoint that returna a short list of items
//This may be where we put the sql stuff

//Add the new item to the database
app.post('/dininghallfood/add', (req,res) => {

    //SQL query to insert the new food item
    const INSERT_FOOD_QUERY = `INSERT INTO dininghallfood (Name, Food_Star_Rating, Number_Of_Ratings) VALUES ('${req.body.Name}', ${req.body.Rating}, ${req.body.Reviews})`;
    connection.query(INSERT_FOOD_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        } else {
            return res.send('successfully added food item');
        }
    }); 
});

//Takes in a post request from the client side
//The reason why it needs a post is that it needs a 
//parameter passed to it so that we can send a request to find
//information for a specific item
app.post('/dininghallfood', (req,res) => {
    //Now we want to create a query for that given item name
    const FIND_FOOD_QUERY = `SELECT Food_Star_Rating, Number_Of_Ratings FROM dininghallfood WHERE Name ='${req.body.Name}'`
    //Make that query via the conection we set up
    connection.query(FIND_FOOD_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        } else {
            return res.send(JSON.stringify(results)); //Send the results of the query to the client
        }
    });
});

//Update an already existing entry in the database
app.post('/dininghallfood/update', (req,res) => {

    const UPDATE_DATABASE_QUERY = `UPDATE dininghallfood SET Food_Star_Rating = ${req.body.Rating}, Number_Of_Ratings = ${req.body.Reviews} WHERE Name = '${req.body.Name}'`
    //Make the query with the connection that we have
    connection.query(UPDATE_DATABASE_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        } else {
            return res.send('Updated database');
        }
    });
});

//Returns the json object in dailyMenu.json
app.get('/dailyMenu.json', (req,res) => {
    const dailyMenu = require('./dailyMenu.json');
    return res.send(JSON.stringify(dailyMenu));
});

//Returns the json object in dhRating.json
app.get('/dhRating.json', (req,res) => {
    const dhRatings = require('./dhRating.json');
    return res.send(JSON.stringify(dhRatings));
});

//Returns the json object in poptimes.json
app.get('/poptimes.json', (req,res) => {
    const data = require('./poptimes.json');
    return res.send(JSON.stringify(data));
});


//Returns the json object in food.json
app.get('/food.json', (req,res) => {
    const foodList = require('./food.json');
    return res.send(JSON.stringify(foodList));
})

//Returns the json object in search.json
app.get('/search.json', (req,res) => {
    const data = require('./search.json');
    return res.send(JSON.stringify(data));
})

//Catches any request that is not handled by the above gets, simply
//reloads the page. This is mainly used for the react routers
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+ '/../../dist/index.html'));
});


const port = process.env.PORT || 80;
app.listen(port);

console.log('App is listening on port ' + port);