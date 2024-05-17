import React, { useState } from 'react';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import './Home.css';

export const Home = () => {

    return (
        <>
            <NavigationBar />
            <div className='img-container'>
                <div className="welcome-text">ACV</div>
                <img src="home_img/composite.jpg" />
            </div>

            <div className="home-text">
                <h1>Qui sommes nous?</h1>
                <p>
                    Etudiants à l'em Lyon, nous sommes passionnés par l'entrepreneuriat et le développement web.
                </p>
            </div>

            <div className="div-download-app">
                <button className="btn-download-app">Download Our App</button>
            </div>

        </>
    );
}

export default Home;