import React, { useState, useEffect } from 'react';
import './floating-cursor.css'; // Import the CSS file for styling

const FloatingCursor = () => {
    const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [angle, setAngle] = useState(0);
    const radius = 100; // Radius of the circular path
    const speed = 0.02; // Speed of the movement

    useEffect(() => {
        const updatePosition = () => {
            const newAngle = angle + speed;
            // Calculate the position based on viewport size
            const x = window.innerWidth / 2 + radius * Math.cos(newAngle);
            const y = window.innerHeight / 2 + radius * Math.sin(newAngle);

            // Ensure the cursor stays within viewport bounds
            const constrainedX = Math.max(radius, Math.min(x, window.innerWidth - radius));
            const constrainedY = Math.max(radius, Math.min(y, window.innerHeight - radius));

            setPosition({ x: constrainedX, y: constrainedY });
            setAngle(newAngle);
        };

        const intervalId = setInterval(updatePosition, 16); // ~60 FPS

        return () => clearInterval(intervalId);
    }, [angle, radius, speed]);

    return (
        <div
            className="floating-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)'
            }}
        />
    );
};

export default FloatingCursor;