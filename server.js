const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const controller = require('./server/contoller');
require('dotenv').config();

const app = express();

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(cors())
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log(`db is connected`)
    })
    .catch((err) => {
        console.log('db is not connected')
    })

//Endpoints
app.post('/api/login', controller.login);
app.post('/api/register', controller.register);
app.get('/api/usercheck',controller.usercheck);

app.get('/ping', (req, res) => {
    res.send('ping');
})

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

