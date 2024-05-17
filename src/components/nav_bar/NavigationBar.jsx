import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavigationBarElement } from './nav_bar_element/NavigationBarElement';
import './NavigationBar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';

export const NavigationBar = () => {

    const expand = 'xxl';

    const [navBarElementsName, setNavBarElementsName] = useState('navbar-elements');

    const onOffCanvas = () => {
        setNavBarElementsName('');
    };

    
    const onShowCanvas = () => {
        setNavBarElementsName('navbar-elements');
    };
    
    return (
        <div>
            <Navbar
                className='flex-nav-bar fixed-top nav-bar-font'
                expand={expand}
            >
                <Container fluid>
                    <Navbar.Brand className='nav-bar-brand'>
                        <img src="/logo/logo.png" alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        onHide={onShowCanvas}
                        onShow={onOffCanvas}
                        
                    >
                        <Offcanvas.Header 
                        closeButton
                        className='navbar-offcanvas'
                        >
                            <Offcanvas.Title >
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body
                        className={navBarElementsName}
                        >
                            <>
                                <NavigationBarElement props={
                                    {
                                        name: "Accueil",
                                        route: "/"
                                    }
                                } />
                                <NavigationBarElement props={
                                    {
                                        name: "Labels",
                                        route: "/label"
                                    }
                                } />
                                <NavigationBarElement props={
                                    {
                                        name: "Contact",
                                        route: "/contacts"
                                    }
                                } />
                                
                            </>
                        </Offcanvas.Body>


                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;