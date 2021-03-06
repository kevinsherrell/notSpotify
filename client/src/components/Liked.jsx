import React, { Component } from 'react';
import Artist from './Artist';

//Props needed:
//likedArtists: Array of Liked Artists (Already imported from ArtistsPage)

class Liked extends Component {
    render() {
        return(
            <div className='liked'>
                <h1>Liked Artists</h1>
                <div className={ (this.props.likedArtists.length === 0) ? 'artistBlock emptyLikes' : 'artistBlock' }>
                    {
                        this.props.likedArtists.map( (artist, key) => {
                            return(
                                <Artist artist={ artist } index= { key } deleteFavorite= { this.props.deleteFavorite }/>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default Liked;