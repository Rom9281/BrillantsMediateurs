import React from 'react';
import './GradeCircle.css';

const GradeCircle = ({ grade }) => {
    
    let color = 'red';

    if (grade < 4) {
        color = 'red';
    } else if (grade >= 4 && grade <= 6) {
        color = 'orange';
    } else {
        color = 'green';
    }

    const circleStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    

    const textStyle = {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    return (
        <div className="grade-circle-container">
            <div style={circleStyle}>
                <span style={textStyle}>{grade}</span>
            </div>
        </div>
    );
};

export default GradeCircle;