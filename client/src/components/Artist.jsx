import React, { Component } from 'react';

class Artist extends Component {
    render() {
        return(
            <div>
                <img src={ this.props.artist.img } alt={this.props.artist.name + ' Image'} className='artistImage' />
                
            </div>
        )
    }
}

export default Artist;