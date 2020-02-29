const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');



const app = express();

// app.use(express.json());
app.use(bodyParser.json());

const courses = [
    { id: 1, name: 'c1' },
    { id: 2, name: 'c2' },
    { id: 3, name: 'c3' },
    { id: 4, name: 'c4' },
    { id: 5, name: 'c5' },
]

app.get('/', (req, res) => {
    res.send('Helloww');
});

app.get('/api/courses', (req, res) => {
    // res.send([1, 2, 3]);
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params.id)
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('course not found');
    res.send(course);

});

app.get('/api/post/:year/:month', (req, res) => {
    // res.send(req.params)
    res.send(req.query)//get query parameters
});


// ----------------------------------------- POST -------------------------------------------------------- //
app.post('/api/courses', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is Req and min 3');
        return;
    }
    // console.log(req.body);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course);
});

// ----------------------------------------- PUT ---------------------------------------------------- //
app.put('/api/courses/:id', (res, req) => {

});

//set port dayanamicly
const port = (process.env.PORT || 3000);

app.listen(port, () => {
    console.log(port);
})