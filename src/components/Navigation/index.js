import React, { useEffect } from 'react';

function Navigation(props) {
    const {
        currentTab,
        setCurrentTab
    } = props;
    
    return(
        <nav>
            <ul className="flex-row">
                <li className={`mx-1 ${currentTab === "about" && 'navActive'}`}>
                    <span onClick={() => setCurrentTab("about")}>About me</span>
                </li>
                <li className={`mx-1 ${currentTab === "portfolio" && 'navActive'}`}>
                    <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
                </li>
                <li className={`mx-1 ${currentTab === "contact" && 'navActive'}`}>
                    <span onClick={() => setCurrentTab("contact")}>Contact</span>
                </li>
                <li className={`mx-1 ${currentTab === "resume" && 'navActive'}`}>
                    <span onClick={() => setCurrentTab("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;