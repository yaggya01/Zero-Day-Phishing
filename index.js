const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
var cors = require('cors')

app.use(cors())

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', require(path.join(__dirname, 'routes/routes.js')));
//Express Server listening to port
app.listen(port, () => {
    console.log(`Node 2 app listening at http://localhost:${port}`)
})