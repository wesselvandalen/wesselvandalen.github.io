import './norway-component2.css';
import image from '../assets/norway/vannbygde.jpg';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';

export default function NorwayComponent2() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translatePage();
    }, [translation]);

    const translatePage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    return (
        <div className='nor-continer'>
            <div className="nor-content">
                <div className="nor-wrapper">
                    <div className="nor-text-info">
                        <h3>Kreativitet møter kode.</h3>
                        <p>{translation['solutionparagraph']}</p>
                    </div>
                    <div className="nor-image-box">
                        <img src={image} alt='Typiske norske hus ved havet' title='Typiske norske hus ved havet'/>
                    </div>
                </div>
            </div>
        </div>
    );
}