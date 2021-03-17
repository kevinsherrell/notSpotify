import React, { Component } from 'react';
import Navbar from './Navbar';
import Liked from './Liked';

const likedArtists = [];
//Props Needed:
class ArtistsPage extends Component {
    render() {
        return(
            <div className='artistsPage'>
                <Navbar currentPage='favoriteArtists'/>
                <Liked likedArtists={ likedArtists }/>
            </div>
        )
    }
}

export default ArtistsPage;