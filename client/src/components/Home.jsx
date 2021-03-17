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
        oAuth : '',
        artists: [],
        favorites: []
    }
    this.getOAuth = this.getOAuth.bind(this)
    this.getSpot = this.getSpot.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
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
        fetch("https://api.spotify.com/v1/search?q=david&type=artist",{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.state.oAuth
            }
        })
        .then(data => {return data.json()})
        .then(parsedData => this.setState({artists : parsedData.artists.items}))
    }

    
    addFavorite(artist) {
        fetch(baseURL + '/favorites', {
            method: 'POST',
            body: JSON.stringify({
                name: artist.name,
                image: artist.images[0].url
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.artists.map(artist => {
                    return (
                        <h2 onClick={() => this.addFavorite(artist)}>{artist.name}</h2>
                    )
                })}
            </div>
        )
    }
}

export default Home;