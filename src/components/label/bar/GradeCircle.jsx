import React from 'react';
import './GradeCircle.css';

const GradeCircle = ({ grade, size }) => {
    
    let color = 'red';
    let circleSize = '120px';
    let fontSize = '30px';

    if (grade < 4) {
        color = 'red';
    } else if (grade >= 4 && grade <= 6) {
        color = 'orange';
    } else {
        color = 'green';
    }

    if (size === 0) {
        circleSize = '70px';
        fontSize = '20px';
    }

    const circleStyle = {
        width: circleSize,
        height: circleSize,
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    

    const textStyle = {
        color: 'white',
        fontSize: fontSize,
        fontWeight: 'bold',
    };

    return (
        <div className="grade-circle-container">
            <div style={circleStyle}>
                <span style={textStyle}>{grade}/10</span>
            </div>
        </div>
    );
};

export default GradeCircle;