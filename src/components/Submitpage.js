import React from "react";
import "./Submitpage.css";

const Submitpage = (props) => {

    return (
        <div className="submissionPage" style={{
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,        
            }}>

            <div className="submissionTable">
                
                <div className="table" >
                    <h1>Playlist submission</h1>
                    <p style={{fontSize: "12px"}}>submit your released music to our Spotify playlist</p>
                    <button onClick={props.playlistPage} className="btnStyle">Submit</button>
                </div>
                
                <div className="table" >
                    <h1>Demo submission</h1>
                    <p style={{fontSize: "12px"}}>submit your unreleased demo to our label</p>
                    <button onClick={props.demoPage} className="btnStyle" >Submit</button>
                </div>

            </div>


        </div>
    )
};

export default Submitpage;