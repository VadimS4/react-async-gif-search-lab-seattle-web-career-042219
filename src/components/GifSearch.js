import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} 
                    onChange={this.handleChange} ></input>
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch;