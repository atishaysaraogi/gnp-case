const express = require('express'); // import express module (simplifies routing/requests, among other things)
const cors = require('cors'); // import the CORS library to allow Cross-origin resource sharing
const app = express(); // create an instance of the express module (app is the conventional variable name used)
var bodyParser = require('body-parser');
const services = require('./gnp_server/requests.js');

const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS 
app.use(express.json()); // Recognize Request Objects as JSON objects
app.use(express.static('build')); // serve static files (css & js) from the 'public' directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/casenote', (req, res) => {
    services.addCaseNoteToDB(req, res);
  });

app.get('/api/casenote', (req,res)=>{
  services.getCaseNoteFromDB(req, res);
})
app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 