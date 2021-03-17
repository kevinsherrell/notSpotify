import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <img src='./images/NotSpotify.png' alt='Not Spotify Logo' className='logo'/>
                <h3>Features</h3>
                <p className={ (this.props.currentPage==='favoriteArtists') ? 'currentPage' : ''}>Favorite Artists</p>
            </nav>
        )
    }
}

export default Navbar;