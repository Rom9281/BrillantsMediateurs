import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './ExperienceElement.css';

export const ExperienceElement = ({ props }) => {

    const handleClick = () => {
        window.location.href = props.url;
    };

    const [isWindowSmall, setIsWindowSmall] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsWindowSmall(window.innerWidth < 850);
        };
      
        // Run the function once to set the initial state
        handleResize();
      
        // Add the event listener
        window.addEventListener('resize', handleResize);
      
        // Remove the event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
      }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


    return (
        <div onClick={handleClick}>
            <div className="contact-wrapper">
                <Row>
                    <>
                        <Col className='column-style'>
                                <img
                                    className='contact-img'
                                    src={props.img}
                                    alt="Contact Image"
                                    width="100"
                                    height="100"
                                />
                        </Col>
                    </>
                    
                    {isWindowSmall &&
                        <>
                            <Col>
                                <h2 className='contact-font-h1'>{props.title}</h2>
                                <h3 className='contact-font-h3'>📍 {props.location}</h3>
                                <h3 className='contact-font-h3'>📅 {props.start} - {props.end}</h3>
                                <p className='contact-font-p'>{props.descript}</p>
                            </Col>
                        </>
                    }
                    {!isWindowSmall &&
                        <>
                            <Col className='d-flex align-items-center'>
                                <h2 className='special-h2'>{props.title}</h2>
                            </Col>
                            <Col className='d-flex align-items-center'>
                                <h3 className='special-h3'>📍 {props.location}</h3>
                            </Col>
                            <Col className='d-flex align-items-center'>
                                <h3 className='special-h3'>📅 {props.start} - {props.end}</h3>
                            </Col>
                            <Col className='d-flex align-items-center'>
                                <p className='special-parag'>{props.descript}</p>
                            </Col>
                        </>
                    }


                </Row>
            </div>
        </div>
    );
}

export default ExperienceElement;