import React from 'react';
import Navbar from 'react-bootstrap/Nav';
import './NavigationBarElement.css';

export const NavigationBarElement = ({ props }) => {
    return (
        <div className='nav-bar-border-element'>
            <Navbar.Link
                href={props.route}
                className="nav-bar-text-element"
            >{props.name}</Navbar.Link>
        </div>
    );
};



export default NavigationBarElement;