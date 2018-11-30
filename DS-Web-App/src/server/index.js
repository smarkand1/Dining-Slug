const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors'); //Allow for cross origin resource sharing

const app = express();

const bodyParser = require('body-parser');

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
    console.log("Got an sql request");

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
    console.log("Wow, a post request for database");
    console.log('body: ' + req.body.Name);
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
    console.log("Updating the database with a new review");
    console.log("New rating: " + req.body.Rating);
    console.log("New number of reviews: ", req.body.Reviews);

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

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+ '/../../dist/index.html'));
    console.log("Refresh");
});


const port = process.env.PORT || 80;
app.listen(port);

console.log('App is listening on port ' + port);