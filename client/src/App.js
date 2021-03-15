import React, {Component} from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists : []
    }
  }

  getArtists() {
    //Request to Spotify will go here to populate state.artists
  }

  render() {
    return(
      <h1>Not Spotify</h1>
    )
  }
}

export default App