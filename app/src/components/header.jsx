import './header.css';
import LanguageMenu from './language-menu';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [t] = useTranslation("global");

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-inner-content">

                    <div>
                        <p className='header-name'>Wessel Rowdy van Dalen</p>
                    </div>

                    <div className="header-links">
                        <a href="#home">{t('chapters.home')}</a>
                        <a href="#stack">Stack</a>
                        <a href="#education">{t('chapters.education')}</a>
                        <a href="#work">{t('chapters.work')}</a>
                    </div>

                    <div className="header-nav">
                        <LanguageMenu />
                    </div>

                </div>
            </div>
        </div>
    )
}