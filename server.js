const express =require('express');
const app = express();
const axios = require('axios'); //For Fetch Requests from the Spotify API
const port = 3000 // this will be moved to environment variable
const morgan = require('morgan');
const cors = require('cors');
// middleware
app.use(morgan('dev')); // Morgan is for server logging

// mongoose connection

//Cors
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.listen(port, ()=>console.log(`server is listening on port ${port}`));