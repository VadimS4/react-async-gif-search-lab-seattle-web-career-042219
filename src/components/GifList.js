import React from 'react';

const GifList = props => {
    
    return (
        <div>
            {props.gifs.map(gif => {
                return <img key={gif.url} src={gif.images.original.url} alt="gif"/>
            })}
        </div>
    )
}

export default GifList;