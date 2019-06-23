const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const controller = require('./server/contoller');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log(`db is connected`)
    })
    .catch((err) => {
        console.log('db is not connected')
    })

app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.post('/api/test', (req, res, next) => {
    res.send('this worked!')
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

