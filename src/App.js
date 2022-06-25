import React, { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
        <Portfolio></Portfolio>
      )}

      {currentTab === "contact" && (
        <Contact></Contact>
      )}

      {currentTab === "resume" && (
        <Resume></Resume>
      )}
    </>
  );
}

export default App;
