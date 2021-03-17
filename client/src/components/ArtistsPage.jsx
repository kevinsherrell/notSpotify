import React, { Component } from 'react';
import Navbar from './Navbar';
import Liked from './Liked';
import Recommended from './Recommended';

let serverUrl = 'http://localhost:3003'

const likedArtists = [];
const recommendedArtists = [];
//Props Needed:
class ArtistsPage extends Component {
    state = {
        token: ''
    }
    componentDidMount = () => {
        this.getToken();
    }

    getToken = () => {
        fetch(serverUrl + '/getOAuth')
            .then(
                res => res.json()
            )
            .then(
                resJson => {
                    this.setState({
                        token: resJson
                    })
                    console.log(resJson);
                }
            )
    }

    getUserId = () => {
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'test'
            },
        })
    }

    render() {
        return(
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

export default ArtistsPage;