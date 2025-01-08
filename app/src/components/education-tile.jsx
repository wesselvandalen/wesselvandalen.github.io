import './education-tile.css';
import React from 'react';

export default function EducationTile(props) {
    return (
        <div className="education-tile-container">
            <div className="education-tile-content">

                <div className="education-tile-name-role-date-container">
                    <div className="education-tile-name-role-container">
                        <h2>{props.study}</h2>
                        <p>{props.school}</p>
                    </div>
                    <p className="education-tile-date">{props.date}</p>
                </div>

                <p className="education-tile-description">{props.description}</p>

            </div>
        </div>
    );
}