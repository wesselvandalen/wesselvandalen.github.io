import './side-panel.css';
import picture from '../assets/jeg.png';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './language-dropdown';

export default function SidePanel() {
    const [translation] = useTranslation("global");

    return (
        <div className="side-panel-container">
            <div className="side-panel-content">
                <a href="#about">
                    <span>
                        <img src={picture} alt="Me" className='personal-picture'/>
                    </span>
                </a>
                
                <div className="collapse navbar-collapse">
                    <div className="panel-chapters">
                        <a href="#profile">{translation('header.profile')}</a>
                        <a href="#work">{translation('header.work')}</a>
                        <a href="#education">{translation('header.education')}</a>
                        <a href="#skills">{translation('header.skills')}</a>
                        <LanguageDropdown/>
                    </div>
                </div>
            </div>
        </div>
    );
}