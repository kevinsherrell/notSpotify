import React, { Component } from 'react';
import Navbar from './Navbar';
import Liked from './Liked';
import Recommended from './Recommended';

const likedArtists = [];
const recommendedArtists = [];
//Props Needed:
class ArtistsPage extends Component {
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