import React, { Component } from 'react';

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
  } else {
    baseURL = 'your heroku backend url here'
  }

const likedArtists = []; //Placeholders, eventually to be replaced by backend
const recommendedArtists = [];

class Home extends Component {
    constructor(props){
    super(props)
    this.state = {
        oAuth : ''
    }
    this.getOAuth = this.getOAuth.bind(this)
}

    componentDidMount() {
        this.getOAuth()
    }

    getOAuth() {
        fetch(baseURL + '/getOAuth')
        .then(data => {return data.json()})
        .then(parsedData => this.setState({oAuth : parsedData}))
    }

    render() {
        return (
            <div className='artistsPage'>
                <Navbar currentPage='favoriteArtists'/>
                <div className='likedAndRecommended'>
                    <Liked likedArtists={ likedArtists }/>
                    <Recommended recommendedArtists = { recommendedArtists }/>
                </div>
                
            </div>
        )
    }
}

export default Home;