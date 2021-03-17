import React, { Component } from 'react';

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
  } else {
    baseURL = 'your heroku backend url here'
  }

class Home extends Component {
    constructor(props){
    super(props)
    this.state = {
        oAuth : ''
    }
    this.getOAuth = this.getOAuth.bind(this)
    this.getSpot = this.getSpot.bind(this)
}

    componentDidMount() {
        this.getOAuth()
    }

    getOAuth() {
        fetch(baseURL + '/getOAuth')
        .then(data => {return data.json()})
        .then(parsedData => this.setState({oAuth : parsedData}, ()=>{this.getSpot()}))
    }

    getSpot() {
        fetch('https://api.spotify.com/v1/artists?ids=7GaxyUddsPok8BuhxN6OUW%0oSGxfWSnnOXhD2fKuz2Gy',{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.state.oAuth
            }
        })
        .then(data => {return data.json()})
        .then(parsedData => console.log(parsedData))
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}

export default Home;