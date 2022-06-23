import React from 'react';
import myPhoto from "../../assets/Me.jpg";

const About = () => {
    return (
        <section>
            <h1>About me</h1>
            <img src={myPhoto} id="avatar" alt="Patrick Quirk"/>
            <p>
                Test text
            </p>
        </section>
    )
};

export default About;