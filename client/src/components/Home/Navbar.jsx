import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <h3>Features</h3>
                <p className={ (this.props.currentPage==='favoriteArtists') ? 'currentPage' : ''}>Favorite Artists</p>
            </nav>
        )
    }
}

export default Navbar;