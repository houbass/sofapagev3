import React from "react";
import "./Thanksdemo.css";



const Thanksdemo = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            background: "white",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,
            display: "flex",
            flexDirection: "column",
            padding: "60px 100px",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)"
        }}>
            <h1>Thank you for your submission</h1>
            <p>we let you know as soon as possible :))</p>
            <div className="buttonsBox">
                <button className="btnStyle2" onClick={props.submitFun}>submit another one</button>
                <button className="btnStyle2" onClick={props.homeFun}>back to homepage</button>
            </div>
        </div>
    )
}

export default Thanksdemo;