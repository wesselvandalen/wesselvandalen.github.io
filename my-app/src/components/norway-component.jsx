import './norway-component.css';
import sno from '../assets/norway/sno.jpg';
import preikestolen from '../assets/norway/preikestolen.jpg';
import hus from '../assets/norway/hus.png';
import { useTranslation } from 'react-i18next';

export default function NorwayComponent() {
    const [translation, i18n] = useTranslation("global");

    return (
        <div className='component-container' id='norway'>
            <div className="component-content">
                <div className="component-wrapper">
                    <div className="component-images-wrapper">
                        <div className="component-images-first-row">
                            <img src={preikestolen} alt='Jeg som står på Preikestolen' title='Jeg som står på Preikestolen'/>
                        </div>
                        <div className="component-images-second-row">
                            <img src={sno} alt='Lofoten dekket i snø' title='Lofoten dekket i snø'/>
                            <img src={hus} alt='Typiske norske røde hus' title='Typiske norske røde hus'/>
                        </div>
                    </div>
                    <div className="component-text">
                        <h3 className='component-title'>Det er typisk norsk å være god.</h3>
                        <p className='component-description'>
                            {translation('norwaypart1')}
                        </p>
                        <p className='component-description'>
                            {translation('norwaypart2')}
                        </p>
                        <p className='component-description'>
                            *{translation('norwaypart3')}
                            <a className='norway-a' href="mailto:wesselvandalen@gmail.com"> {translation('norwaymail')}</a>!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}