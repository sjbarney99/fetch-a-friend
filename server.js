const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const auth = require('./server/controllers/auth');
const dogParks = require('./server/controllers/dogParks');
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

//Auth Endpoints
app.post('/api/login', auth.login);
app.post('/api/register', auth.register);
app.get('/api/usercheck',auth.usercheck);

//Park Endpoints
app.post('/api/parks', dogParks.parks);
app.get('/api/getter', dogParks.getAll);
app.put('/api/parks/:id', dogParks.updatePrk);
app.delete('/api/deletePrk/:id');

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

