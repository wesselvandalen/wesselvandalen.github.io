import './norway-component.css';
import skog from '../assets/norway/skog.jpg';
import preikestolen from '../assets/norway/preikestolen.jpg';
import lofoten from '../assets/norway/image2.jpg';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';

function NorwayComponent() {
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
        <div className='component-container'>
            <div className="component-content">
                <div className="component-wrapper">
                    <div className="component-text">
                        <h3 className='component-title'>Det er typisk norsk å være god.</h3>
                        <p className='component-description'>
                            {translation['norwaypart1']}
                        </p>
                        <p className='component-description'>
                            {translation['norwaypart2']}
                        </p>
                    </div>
                    <div className="component-images-wrapper">
                        <div className="component-images-first-row">
                            <img src={preikestolen} alt='Preikestolen' title='Preikestolen'/>
                        </div>
                        <div className="component-images-second-row">
                            <img src={lofoten} alt='Lofoten' title='Lofoten'/>
                            <img src={skog} alt='Skog' title='Skog'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NorwayComponent;