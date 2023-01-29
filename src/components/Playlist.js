import React from "react";

//imported stuffs
import "./Playlist.css"

const Playlist = () => {

    return (
        <div className="playlist">
            <p className="playlistTitle"><strong>Listen to our playlist</strong></p>
            <iframe 
            title="Sofa Lofi spotify playlist"
            className="playlistFrame"
            src="https://open.spotify.com/embed/playlist/6so9XlkasaOqQFNghgzUX5?utm_source=generator" 
            Width= "100%"
            height="1000" 
            allowfullscreen=""                 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            >
            </iframe>
        </div>
    )
};

export default Playlist;

