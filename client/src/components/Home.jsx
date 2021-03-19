import React, { Component } from 'react';
import Navbar from './Navbar';
import Liked from './Liked';
import Recommended from './Recommended';

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
  } else {
    baseURL = 'https://murmuring-basin-75117.herokuapp.com'
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
    this.deleteFavorite = this.deleteFavorite.bind(this)
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
        fetch(baseURL + '/favorites/', {
            method: 'POST',
            body: JSON.stringify({
                name: artist.name,
                image: artist.images[0].url
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(resJson => {
            const copyFavorites = [...this.state.favorites]
            copyFavorites.push(resJson)
            console.log(copyFavorites);
            this.setState({
                favorites : copyFavorites
            })
        })
    }

    deleteFavorite(artist) {
        fetch(baseURL + '/favorites/' + artist._id, {
            method: 'DELETE',
        }).then( res => {
            const copyFavorites = [...this.state.favorites];
            const findIndex = this.state.favorites.findIndex(favorite => favorite._id === artist._id)
            copyFavorites.splice(findIndex, 1)
            this.setState({ favorites : copyFavorites})
        })
    }

    render() {
        return (

            <div className='artistsPage'>
                 <div>
                
                </div>
                <Navbar currentPage='favoriteArtists'/>
                <div className='likedAndRecommended'>
                    <Liked likedArtists={ this.state.favorites } deleteFavorite={this.deleteFavorite}/>
                    <Recommended recommendedArtists = { this.state.artists } addFavorite={ this.addFavorite }/>
                </div>
            </div>
        )
    }
}

export default Home;