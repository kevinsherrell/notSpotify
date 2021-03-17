import React, { Component } from 'react';
import Artist from './Artist';

class Recommended extends Component {
    render() {
        return(
            <div>
                <div className='recommended'>
                <h1>Reccomended Artists</h1>
                <div className='artistBlock'>
                    {
                        this.props.recommendedArtists.map( (artist, key) => {
                            return(
                                <Artist artist={ artist } index= { key } />
                            )
                        }
                    )}
                </div>
            </div>
            </div>
        )
    }
}

export default Recommended;