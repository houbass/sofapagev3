import React,{useState} from "react";

//imported stuffs
import "./MainContent.css";
import MainPic from "./pic/main_pic.png";

//notes imgs
import note1 from "./pic/notes/note1.png";
import note2 from "./pic/notes/note2.png";
import note3 from "./pic/notes/note3.png";

const MainContent = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition
        }}>
            <div className="description">
                <h1 className="header">Welcome to Sofa Lofi</h1>
                <p>The place where you can chill and pleasure your sofa with your presence</p>
            </div>
            <img className="main_pic" src={MainPic} />
            <img className="note1" src={note1} />
            <img className="note2" src={note1} />
            <img className="note3" src={note2} />
            <img className="note4" src={note3} />

        </div>
    )
};

export default MainContent;