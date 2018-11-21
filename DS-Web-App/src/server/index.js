const express = require('express');
const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user'
})

const app = express();

//serve the state files from the React app
app.use(express.static("dist"));

//An api endpoint that returna a short list of items
//This may be where we put the sql stuff

app.get('/sqlreq', (req,res) => {
    console.log("Got an sql request");
    res.send({data : "Hello good sir"});
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