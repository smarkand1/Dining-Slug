const express = require('../client/node_modules/express');
const path = require('path');
const mysql = require('../client/node_modules/mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user'
})

const app = express();

//serve the state files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

//An api endpoint that returna a short list of items
//This may be where we put the sql stuff

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+ '/../client/build/index.html'));
    console.log("Refresh");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);