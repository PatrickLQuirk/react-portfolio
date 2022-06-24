import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        currentTab,
        setCurrentTab
    } = props;
    return (
        <header className="flex-row">
            <h2>Patrick Quirk</h2>
            <Navigation 
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            ></Navigation>
        </header>
    )
};

export default Header