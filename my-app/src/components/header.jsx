import './header.css';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './language-dropdown';
import { useState, useEffect } from 'react';

export default function Header() {
    const [translation] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);

    const changeMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScrollOrTouch = () => {
            closeMenu();
        };
    
        window.addEventListener('scroll', handleScrollOrTouch);
        window.addEventListener("touchmove", handleScrollOrTouch, false);
        window.addEventListener('gesturechange', handleScrollOrTouch);
    
        return () => {
            window.removeEventListener('scroll', handleScrollOrTouch);
            window.removeEventListener("touchmove", handleScrollOrTouch);
            window.removeEventListener('gesturechange', handleScrollOrTouch);
        };
    }, []); 

    return (
        <div className='header-container'>
            <div className="header-content">

                <button className='menu' onClick={changeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="header-list" style={{ display: isOpen ? 'flex' : 'none' }}>
                    <a href="#about">{translation('header.profile')}</a>
                    <a href="#work">{translation('header.work')}</a>
                    <a href="#education">{translation('header.education')}</a>
                    <a href="#skills">{translation('header.skills')}</a>
                    <div className="language-dropdown-wrapper">
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
}