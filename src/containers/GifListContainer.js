import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = (search) => {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(json => this.setState({ gifs: json.data.slice(0, 3)}))
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(json => this.setState({ gifs: json.data.slice(0, 3)}))
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer;