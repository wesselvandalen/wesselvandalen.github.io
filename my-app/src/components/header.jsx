import './header.css';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './language-dropdown';
import { useState } from 'react';

export default function Header() {
    const [translation] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    const changeMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='header-container'>
            <div className="header-content">
                <p className='title'>Wessel Rowdy Dalen</p>

                <button className='menu' onClick={changeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="header-list" style={{ 'display': isOpen ? 'flex' : 'none' }}>
                    <a href="#about">{translation('sidepanel.about')}</a>
                    <a href="#projects">{translation('sidepanel.projects')}</a>
                    <a href="#education">{translation('sidepanel.education')}</a>
                    <a href="#skills">{translation('sidepanel.skills')}</a>
                    <a href="#norway">{translation('sidepanel.norway')}</a>
                    <div className="language-dropdown-wrapper">
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
}