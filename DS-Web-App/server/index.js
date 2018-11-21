const express = require('express');
const path = require('path');

const app = express();

//serve the state files from the React app
app.use(express.static(path.join(__dirname, '/../build')));

//An api endpoint that returna a short list of items
//This may be where we put the sql stuff

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    console.log("Refresh");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);