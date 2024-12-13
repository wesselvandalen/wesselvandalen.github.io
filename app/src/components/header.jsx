import './header.css';
import LanguageMenu from './language-menu';
import meg from '../assets/jeg.jpg';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [t] = useTranslation("global");

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-inner-content">

                    <div className="header-profile">
                        <img src={meg} alt="Bilde av meg" />
                        <div className="header-profile-info">
                            <p className='h-name'>Wessel van Dalen</p>
                            <p className='h-role'>{t('home.role')}</p>
                        </div>
                    </div>

                    <div className="header-nav">
                        <LanguageMenu />
                    </div>

                </div>
            </div>
        </div>
    )
}