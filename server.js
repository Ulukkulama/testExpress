const express = require('express');
// const mysql = require('mysql');
const mySqlConnection = require('./DBconnection');
const bodyParser = require('body-parser');

const PeopleRouets = require('./routes/peoples');

const app = express();

app.use(bodyParser.json());

app.use('/people', PeopleRouets);

const port = (process.env.PORT || 3000);

app.listen(port, () => {
    console.log(port);
});
