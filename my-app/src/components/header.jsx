import './header.css';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './language-dropdown';
import { useState, useEffect } from 'react';

export default function Header() {
    const [translation] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    // Funksjon for å håndtere menytilstanden
    const changeMenu = () => {
        setIsOpen(!isOpen);
    };

    // Funksjon for å lukke menyen
    const closeMenu = () => {
        setIsOpen(false);
    };

    // useEffect for å legge til scroll-event listener
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) closeMenu(); // Lukk menyen hvis den er åpen
        };

        // Legger til event listener på vinduet
        window.addEventListener('scroll', handleScroll);

        // Rydder opp event listener når komponenten unmountes
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className='header-container'>
            <div className="header-content">
                <p className='title'>Wessel Rowdy Dalen</p>

                <button className='menu' onClick={changeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="header-list" style={{ display: isOpen ? 'flex' : 'none' }}>
                    <a href="#about" onClick={closeMenu}>{translation('sidepanel.about')}</a>
                    <a href="#projects" onClick={closeMenu}>{translation('sidepanel.projects')}</a>
                    <a href="#education" onClick={closeMenu}>{translation('sidepanel.education')}</a>
                    <a href="#skills" onClick={closeMenu}>{translation('sidepanel.skills')}</a>
                    <a href="#norway" onClick={closeMenu}>{translation('sidepanel.norway')}</a>
                    <div className="language-dropdown-wrapper">
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
}