import React from 'react';

function Resume() {
    return (
        <main>
            <h1>Resume</h1>

            <h3>View my <a class="text-white" href="https://drive.google.com/file/d/1WsyXrcAFPSko0lauMsn9GBH6qTgUz2iY/view?usp=sharing">resume</a></h3>

            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>

            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
            </ul>

            {/* Possibly add stuff about math and physics proficiencies */}
        </main>
    )
};

export default Resume;