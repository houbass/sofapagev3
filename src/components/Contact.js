import React from "react";


const Contact = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,             
        }}>
            <h1>CONTACT PAGE</h1>
            <p>here gonna be a contact page</p>
        </div>
    )
};

export default Contact;