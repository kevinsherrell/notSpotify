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
        token: '',
        userId: '',
        userObject: {},
    }
    componentDidMount = () => {
        this.getToken()
        .then((token) => {
            this.setState({
                token: token,
            });
            this.getUserId();
        });
    }

    getToken = async () => {
        const token = await fetch(serverUrl + '/getOAuth').then(res => res.json());
        return token
    }

    getUserId = () => {
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + this.state.token
            },
        }).then(
            res => res.json()
        )
        .then(
            resJson => {
                this.setState({
                    userId: resJson.id,
                    userObject: resJson,
                });
                console.log(this.state.userId);
            }
        )
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