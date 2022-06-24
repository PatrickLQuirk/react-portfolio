import React from 'react';

function Resume() {
    return (
        <main>
            <h1>Resume</h1>

            <h3>Download my <a href="../assets/Resume.pdf" download>resume</a></h3>

            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySql, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>

            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            {/* Possibly add stuff about math and physics proficiencies */}
        </main>
    )
};

export default Resume;