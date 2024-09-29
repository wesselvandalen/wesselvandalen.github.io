import './feature.css';
import image from '../assets/preikestolen.jpg';
import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../service/language-service';

function Feature() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translateHeaderPage();
    }, [translation]);

    const translateHeaderPage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    return (
        <div className="seksjon preikestolen">
            <div className="container">
                <div className='feature-wrapper'>
                    <div className="feature-image">
                        <img src={image} alt='Me at Preikestolen' title='Me at Preikestolen'/>
                    </div>
                    <div className="feature-text">
                        <h1>Det er typisk norsk å være god.</h1>
                        <div className='paragraph'>
                            {translation['norwaypart1']}
                        </div>
                        <div className="paragraph">
                            {translation['norwaypart2']}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;