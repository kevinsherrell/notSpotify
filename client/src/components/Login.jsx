import React, { Component } from 'react';
import WindowOpener from './WindowOpener';

const my_client_id = '39c7c593c7fc4e51873b1705c7c9a6b7' //Store this and secret in an .env
const my_client_secret = '84a861c066ec4ae4b9e6ee7b4ec3d960'
var scopes = 'user-read-private user-read-email';
const redirect_uri = 'http://localhost:3000/loginCallback' //Needs if else for heroku
const spotifyUrl = ('https://accounts.spotify.com/authorize' +
'?response_type=code' +
'&client_id=' + my_client_id +
(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
'&redirect_uri=' + encodeURIComponent(redirect_uri));

class Login extends Component {
    render() {
        <div>
            <h1>Login to Spotify</h1>
            <WindowOpener
                url={spotifyUrl}
            />
        </div>
    }
}

export default Login;