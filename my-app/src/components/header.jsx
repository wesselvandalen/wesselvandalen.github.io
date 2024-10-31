import './header.css';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './language-dropdown';
import { useState, useEffect } from 'react';

export default function Header() {
    const [translation] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu state
    const changeMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Add scroll event listener on mount, and remove it on unmount
    useEffect(() => {
        window.addEventListener('scroll', closeMenu);

        return () => {
            window.removeEventListener('scroll', closeMenu);
        };
    }, []); // Empty dependency array to register event only once

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