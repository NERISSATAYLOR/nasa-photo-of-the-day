import React from 'react';

const PhotoDisplay = props => {
    return (
        <div className="photo-display" key={props.date}>
            <h2>Photo Title: {props.title}</h2>
            <p>{props.explanation}</p>
            <p>Date: {props.date}</p>
            <img className="space-image" src={props.image} alt="space pic" />
            <p> copyright: {props.copyright}</p>
        </div>
    )
}

export default PhotoDisplay
