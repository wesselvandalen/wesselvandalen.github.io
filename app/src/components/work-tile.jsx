import './work-tile.css';
import React from 'react';

export default function WorkTile(props) {
    return (
        <div className="work-tile-container">
            <div className="work-tile-content">

                <div className="work-tile-name-role-date-container">
                    <div className="work-tile-name-role-container">
                        <h2>{props.name}</h2>
                        <p>{props.role}</p>
                    </div>
                    <p className="work-tile-date">{props.date}</p>
                </div>

                <p className="work-tile-description">{props.description}</p>

                <div className="work-tile-skills-container">
                    {props.stack.map((skill, index) => {
                        return <p key={index}>{skill}</p>
                    })}
                </div>

            </div>
        </div>
    );
}