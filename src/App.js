import React, { useState } from 'react';
import myPhoto from './assets/Me.jpg';
import Header from './components/Header';

function App() {
  const [currentTab, setCurrentTab] = useState("about");
  return (
    <div>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Header>
      <main>
        {currentTab === "about" && (
          <section id="about">
            <h1>About me</h1>
            <img src={myPhoto} id="avatar" alt="Patrick Quirk"/>
            <p>
              Full-stack developer leveraging mathematics and physics background to help build solutions to hard problems. 
              Recently earned a certificate in full-stack development from the Washington University in Saint Louis Coding Boot Camp, 
              with an understanding of important topics like appropriate architectural layering using Model-View-Controller, asynchronous programming, 
              and data persistence using SQL and NoSQL. 
            </p>
            <p>
              I am an innovative problem solver, passionate about creating well-crafted back-end systems. 
              My background in mathematics and physics gives me an advantage when designing complex applications. 
              I applied aspects of database design and agile development in a recent project. 
              I worked on a team of three to develop a diet app that allows users to select a diet and view foods that are safe for that diet. 
              Our team was very collaborative in developing this app. 
              While we worked together on designing the database, the team looked to me for guidance in the design. 
              As I move forward with my career, I am excited to work with a company where my contributions will be a valuable part of creating great back-end solutions.
            </p>
          </section>
        )}

        {currentTab === "portfolio" && (
          // <Portfolio></Portfolio>
          <h1>Portfolio</h1>
        )}

        {currentTab === "contact" && (
          <section id="contact">
            <h1>Contact</h1>
          </section>
        )}

        {currentTab === "resume" && (
          <section id="resume">
            <h1>Resume</h1>
          </section>
        )}
        
      </main>
    </div>
  );
}

export default App;
