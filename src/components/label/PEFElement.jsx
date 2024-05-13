import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './PEFElement.css';
import GradeCircle from './bar/GradeCircle';

export const PEFElement = ({ id, nom, note, image }) => {

    const handleClick = () => {
        window.location.href = url;
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
                    <Col>
                        <div
                            className="center-block"
                        >
                            <img
                                className='contact-image'
                                src={image}
                                alt="Contact Image"
                                width="100"
                                height="100"
                            />
                        </div>
                    </Col>
                    {isWindowSmall &&
                        <>
                            <Col>
                                <h1 className='contact-font-h1'>{nom}</h1>
                                <h2 className='contact-font-h2'>{note}</h2>
                            </Col>
                        </>
                    }
                    {!isWindowSmall &&
                        <>
                            <Col className='middle-text'>
                                <h1 className='contact-font-h1'>{nom}</h1>
                            </Col>
                            <Col className='left-grade'>
                                <GradeCircle grade={note} />
                            </Col>
                        </>
                    }


                </Row>
            </div>
        </div>
    );
}

export default PEFElement;