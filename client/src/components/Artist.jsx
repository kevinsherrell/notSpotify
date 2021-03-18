import React, { Component } from 'react';

class Artist extends Component {
    render() {
        return(
            <div className='artistItem' onClick={this.props.type==='recommended' ? () => { this.props.addFavorite(this.props.artist)} : ''}>
                <img src={ this.props.type==='recommended' ? this.props.artist.images[0].url : this.props.artist.image} alt={this.props.artist.name + ' Image'} className='artistImage' />
                <h3>{this.props.artist.name}</h3>
            </div>
        )
    }
}

export default Artist;