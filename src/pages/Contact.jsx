import React, { useState } from 'react';
import contactsList from '../data/Contacts';
import { ContactElement } from '../components/contact/ContactElement';
import { NavigationBar } from '../components/nav_bar/NavigationBar';
import './Contact.css';


export const Contact = () => {
    const [center, setCenter] = useState([45.74846, 4.84671]);
    const [zoom, setZoom] = useState(11);

    return (
        <>
            <NavigationBar />
            <div className='img-container'>
                <div className="welcome-text">Contact info</div>
                <img src="/contact_img/mountain2.JPG" />
            </div>
            <div className="contact-boxes">
                {contactsList.map((contact, index) => (
                    <ContactElement key={index} props={contact} />
                ))}
            </div>
        </>
    );
    
}

export default Contact;