import React, { useEffect } from 'react';

function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;