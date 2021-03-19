import React, { Component } from 'react';
import WindowOpener from './WindowOpener';

const my_client_id = '39c7c593c7fc4e51873b1705c7c9a6b7' //Store this in an .env
var scopes = 'user-read-private user-read-email';
const redirect_uri = 'http://localhost:3000/loginCallback' //Needs if else for heroku
const spotifyUrl = ('https://accounts.spotify.com/authorize' +
'?response_type=code' +
'&client_id=' + my_client_id +
(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
'&redirect_uri=' + encodeURIComponent(redirect_uri));

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    setLoggedIn() {
        console.log('This is a test');
        this.setState({
            loggedIn: true
        })
    }

    render() {
        return(
            <div className='loginPage'>
                <h1>Login to Spotify</h1>
                {!this.state.loggedIn ?
                    <WindowOpener
                        url={spotifyUrl}
                        setLoggedIn = { this.setLoggedIn }
                    >
                        Login
                    </WindowOpener>
                    :
                    <a href='/home'><button>Homepage</button></a>
                }
            </div>
        )
    }
}

export default Login;