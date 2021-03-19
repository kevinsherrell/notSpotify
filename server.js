const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios'); //For Fetch Requests from the Spotify API
const publicPath = path.join(__dirname, 'client', 'build');
const port = process.env.PORT || 3003; // this will be moved to environment variable
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')

//Vars
const redirect_uri = 'https://murmuring-basin-75117.herokuapp.com/loginCallback'; //Need an if else statement for heroku
const my_client_id = '39c7c593c7fc4e51873b1705c7c9a6b7'; //This and secret need to be in env
const my_client_secret = '84a861c066ec4ae4b9e6ee7b4ec3d960';
let OAuthToken = '';
let mainOauthCode = '';
let refreshToken = '';

// middleware
app.use(morgan('dev')); // Morgan is for server logging
app.use(express.json())


// mongoose connection
MONGODB = process.env.MONGODB || `mongodb://localhost:27017/favorites`;
mongoose.connect(MONGODB, { useNewUrlParser : true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongoose')
})



//Cors
// const whitelist = ['http://localhost:3000', '/']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// app.use(cors(corsOptions));


//controllers
const favoritesController = require('./controllers/favoritescont.js')
app.use('/favorites', favoritesController)


//auth Routes
app.get('/getOAuth', (req, res) => {
    res.status(200).json(OAuthToken)
})

app.get('/getToken/:code', (req, res) => {
    mainOauthCode = req.params.code;
    const data = my_client_id + ':' + my_client_secret //https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');

    const options = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + base64data,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            grant_type: 'authorization_code',
            code: mainOauthCode,
            redirect_uri: redirect_uri,
        }
    } //End of Options
    axios(options)
    .then(res => {
        OAuthToken = res.data.access_token;
        refreshToken = res.data.refres_token;
    })
    .then(() => {
        console.log(OAuthToken);
        console.log('REFRESH TOKEN IS: ' + refreshToken)
        res.json({codeRecieved: true});
    })
    .catch(err => {
        console.log(err);
        res.json({codeRecieved: false});
    });
}) // End of app.post

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, ()=>console.log(`server is listening on port ${port}`));