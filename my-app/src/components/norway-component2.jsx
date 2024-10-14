import './norway-component2.css';
import image from '../assets/norway/vannbygde.jpg';
import { useTranslation } from 'react-i18next';

export default function NorwayComponent2() {
    const [translation, i18n] = useTranslation("global");

    return (
        <div className='nor-continer'>
            <div className="nor-content">
                <div className="nor-wrapper">
                    <div className="nor-text-info">
                        <h3>Kreativitet møter kode.</h3>
                        <p>{translation('solutionparagraph')}</p>
                    </div>
                    <div className="nor-image-box">
                        <img src={image} alt='Typiske norske hus ved havet' title='Typiske norske hus ved havet'/>
                    </div>
                </div>
            </div>
        </div>
    );
}