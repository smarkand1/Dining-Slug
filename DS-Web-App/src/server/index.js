const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'diningslug'
});


connection.connect(err => {
    if(err) {
        return err;
    }
});

console.log(connection);

//serve the state files from the React app
app.use(express.static("dist"));

app.use(cors()); //Allows us to use cross references between db and javascript

//An api endpoint that returna a short list of items
//This may be where we put the sql stuff

app.get('/dininghallfood/add', (req,res) => {
    console.log("Got an sql request");
    const {Name, Food_Star_Rating, numberofratings} = req.query;
    const INSERT_FOOD_QUERY = `INSERT INTO dininghallfood (Name, Food_Star_Rating, numberofratings) VALUES ('${Name}', ${Food_Star_Rating}, ${numberofratings})`;
    connection.query(INSERT_FOOD_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        } else {
            return res.send('successfully added food item');
        }
    }); 
});

app.post('/sqlreq', (req,res) => {
    console.log("Wow, a post request");
    console.log(res);
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+ '/../../dist/index.html'));
    console.log("Refresh");
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);