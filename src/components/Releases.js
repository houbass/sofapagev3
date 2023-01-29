import React from "react";
import "./Releases.css";

//import platform icons
import Spotify from "./pic/icons/spotify.png";
import Apple from "./pic/icons/apple.png";
import Deezer from "./pic/icons/deezer.png"


const Releases = (props) => {

    return (
        <div style={{
            background: "white",
            position: "absolute",
            width: "1000px",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 0px 50px",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
        }}>
            <h1>Latest Sofa Lofi releases</h1>
            <div className="releasesList">
                <div className="row">

                    <div className="frame">
                        <iframe 
                        width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/90Bi6ithZ2Q" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>Enoki & Phose - Once Upon a Time</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/5yM6ZCCbtCYDydryXIYgP8?si=71d6ff5be58b4c68" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/once-upon-a-time/1664346886?i=1664346916" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/mLyboYLhZt3sfG3s7" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="frame">
                        <iframe 
                        width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/4C478yYHT4Y" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>OVRTME - Nirvana</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/2wKTFxcDzcfcg6fFJY9WEp?si=8d63b8970fd64115" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/nirvana/1659124756?i=1659124757" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/hza4KhxUNYAAs4wE6" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="frame">
                        <iframe width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/CB3ZeKAasQk" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>alhivi & Tyler.l - Nostalgia</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/03R7TPNChFDktLOnDfbB6P?si=a71e1cc206724c5b" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/nostalgia/1660347838?i=1660347839" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/kB92XKA8SPeBGz1U8" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="frame">
                        <iframe width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/lZBdkByhyvc" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>Ogi Feel the Beat - The Other Day</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/2akYSr18OBFSabb1zihh8A?si=68f65865104640e6" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/the-other-day/1659124506?i=1659124507" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/goPd8zSNGpF473XQ9" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="frame">
                        <iframe width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/9l9ZNUhpB-A" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>Beteulan - Sunset</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/0xLL1ItgKkpWO55kO5MOLD?si=65084789e9c745e8" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/sunset/1658872977?i=1658872978" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/C29rXCUoSq1JQaet7" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="frame">                
                        <iframe 
                        width="250" 
                        height="250" 
                        src="https://www.youtube.com/embed/yc8xBrWnXgc" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                        <p>YUXiANG - Starry sky</p>
                        <div className="icons">
                            <div className="icon">
                                <a href="https://open.spotify.com/track/3RQPPlqs5u75GkW2sGqnPL?si=f87655e64a32413c" target="_blank"><img className="iconImg" src={Spotify} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://music.apple.com/cz/album/yuxiang-starry-sky/1648607123?i=1648607124" target="_blank"><img className="iconImg" src={Apple} /></a>
                            </div>
                            <div className="icon">
                                <a href="https://deezer.page.link/Qfi22bwinWWjtxWTA" target="_blank"><img className="iconImg" src={Deezer} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hearMore">
                    <h2>wanna hear more?</h2>
                    <p>check out Sofa Lofi Releases playlist:</p>
                    <a href="https://open.spotify.com/playlist/6xYInAFbEiRecBuFYqXvK7?si=68cbd87f5fe345b8" target="_blank"><button>listen to it here</button></a>
                </div>
            </div>
        </div>
    )
};

export default Releases;