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
                    <span className="side-panel-name">Wessel Rowdy Dalen</span>
                    <span>
                        <img src={picture} alt="Me" className='personal-picture'/>
                    </span>
                </a>
                
                <div className="collapse navbar-collapse">
                    <div className="panel-chapters">
                        <a href="#about">{translation('sidepanel.about')}</a>
                        <a href="#projects">{translation('sidepanel.projects')}</a>
                        <a href="#education">{translation('sidepanel.education')}</a>
                        <a href="#skills">{translation('sidepanel.skills')}</a>
                        <a href="#norway">{translation('sidepanel.norway')}</a>
                        <LanguageDropdown/>
                    </div>
                </div>
            </div>
        </div>
    );
}