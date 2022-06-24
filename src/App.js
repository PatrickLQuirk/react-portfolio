import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';

function App() {
  const [currentTab, setCurrentTab] = useState("about");
  return (
    <>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Header>
      {currentTab === "about" && (
        <About></About>
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
    </>
  );
}

export default App;
