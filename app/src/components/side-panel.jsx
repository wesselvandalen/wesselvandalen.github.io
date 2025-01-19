import './side-panel.css';
import { useTranslation } from 'react-i18next';
import './language-menu.css';
import profile from '../assets/kopi.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/githubgray.png';
import stackoverflowIcon from '../assets/icons/stackoverflowgray.png';

export default function SidePanel() {
    const [t, i18n] = useTranslation("global");
    const strokeWidth = 1.5;

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    const handleLanguageDisplayText = (lang) => {
        switch (lang) {
            case 'no': return 'Norsk';
            case 'nl': return 'Nederlands';
            default: return 'English';
        }
    }

    return (
        <div className="panel-container">

            <nav className="panel-nav">

                <div className="panel-profile">
                    <a href="#home">
                        <img src={profile} alt="Me" />
                    </a>
                </div>

                <div className="panel-content">

                    <a href="#home">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.7221 8.26596C15.2107 8.10312 15.4549 8.02169 15.6174 8.07962C15.7587 8.13003 15.87 8.24127 15.9204 8.38263C15.9783 8.54507 15.8969 8.78935 15.734 9.27789L14.2465 13.7405C14.2001 13.8797 14.1769 13.9492 14.1374 14.007C14.1024 14.0582 14.0582 14.1024 14.007 14.1374C13.9492 14.1769 13.8797 14.2001 13.7405 14.2465L9.27789 15.734C8.78935 15.8969 8.54507 15.9783 8.38263 15.9204C8.24127 15.87 8.13003 15.7587 8.07962 15.6174C8.02169 15.4549 8.10312 15.2107 8.26596 14.7221L9.75351 10.2595C9.79989 10.1203 9.82308 10.0508 9.8626 9.99299C9.8976 9.94182 9.94182 9.8976 9.99299 9.8626C10.0508 9.82308 10.1203 9.79989 10.2595 9.75351L14.7221 8.26596Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.home')}</span>
                    </a>

                    <a href="#education">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4M12 20V10.4M12 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.education')}</span>
                    </a>

                    <a href="#certificates">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 20H5C3.89543 20 3 19.1046 3 18V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V18C21 19.1046 20.1046 20 19 20H17.5M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19ZM12 19L12.0214 18.9998L8.82867 22.1926L6.00024 19.3641L9.01965 16.3447M12 19L15.1928 22.1926L18.0212 19.3641L15.0018 16.3447M9 6H15M7 9.5H17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.certificates')}</span>
                    </a>

                    {/* <a href="#resume">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V16.5M16 13H11.5M16 9H12.5M16 17H8M6 10V4.5C6 3.67157 6.67157 3 7.5 3C8.32843 3 9 3.67157 9 4.5V10C9 11.6569 7.65685 13 6 13C4.34315 13 3 11.6569 3 10V6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Resume</span>
                    </a> */}

                    <a href="#work">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 21V7C8 6.07003 8 5.60504 8.10222 5.22354C8.37962 4.18827 9.18827 3.37962 10.2235 3.10222C10.605 3 11.07 3 12 3C12.93 3 13.395 3 13.7765 3.10222C14.8117 3.37962 15.6204 4.18827 15.8978 5.22354C16 5.60504 16 6.07003 16 7V21M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.work')}</span>
                    </a>

                    <a href="#stack">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.skills')}</span>
                    </a>

                    <a href="#interests">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 22H14.5M15 15.3264C17.3649 14.2029 19 11.7924 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.7924 6.63505 14.2029 9 15.3264V16C9 16.9319 9 17.3978 9.15224 17.7654C9.35523 18.2554 9.74458 18.6448 10.2346 18.8478C10.6022 19 11.0681 19 12 19C12.9319 19 13.3978 19 13.7654 18.8478C14.2554 18.6448 14.6448 18.2554 14.8478 17.7654C15 17.3978 15 16.9319 15 16V15.3264Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.interests')}</span>
                    </a>

                    <a href="#contact">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.744 2.63346L21.272 7.52667C21.538 7.69957 21.671 7.78602 21.7674 7.90134C21.8527 8.00342 21.9167 8.12149 21.9558 8.24865C22 8.39229 22 8.55092 22 8.86818V16.1999C22 17.88 22 18.7201 21.673 19.3619C21.3854 19.9263 20.9265 20.3853 20.362 20.6729C19.7202 20.9999 18.8802 20.9999 17.2 20.9999H6.8C5.11984 20.9999 4.27976 20.9999 3.63803 20.6729C3.07354 20.3853 2.6146 19.9263 2.32698 19.3619C2 18.7201 2 17.88 2 16.1999V8.86818C2 8.55092 2 8.39229 2.04417 8.24865C2.08327 8.12149 2.14735 8.00342 2.23265 7.90134C2.32901 7.78602 2.46201 7.69957 2.72802 7.52667L10.256 2.63346M13.744 2.63346C13.1127 2.22315 12.7971 2.01799 12.457 1.93817C12.1564 1.86761 11.8436 1.86761 11.543 1.93817C11.2029 2.01799 10.8873 2.22315 10.256 2.63346M13.744 2.63346L20.9681 7.32913C21.312 7.55268 21.484 7.66445 21.5435 7.8062C21.5956 7.93008 21.5956 8.06969 21.5435 8.19356C21.484 8.33531 21.312 8.44709 20.9681 8.67064L13.744 13.3663C13.1127 13.7766 12.7971 13.9818 12.457 14.0616C12.1564 14.1321 11.8436 14.1321 11.543 14.0616C11.2029 13.9818 10.8873 13.7766 10.256 13.3663L3.03193 8.67064C2.68801 8.44709 2.51604 8.33531 2.45649 8.19356C2.40444 8.06969 2.40444 7.93008 2.45649 7.8062C2.51604 7.66445 2.68801 7.55268 3.03193 7.32913L10.256 2.63346" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.contact')}</span>
                    </a>

                    {/* Språk dropdown meny */}
                    <div className="dropdown">
                        <button className="dropbtn">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8L10 13M4 14L10 8L12 5M2 5H14M7 2H8M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{handleLanguageDisplayText(i18n.language)}</span>
                        </button>
                        <div className="dropdown-content">
                            <button onClick={() => handleLanguageSwitch('en')} style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }} >English</button>
                            <button onClick={() => handleLanguageSwitch('no')} >Norsk bokmål</button>
                            <button onClick={() => handleLanguageSwitch('nl')} style={{ borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }} >Nederlands</button>
                        </div>
                    </div>

                </div>

                <div className="line" />

                <div className="panel-content">
                    <a href="mailto:wesselvandalen@gmail.com">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t('chapters.mail')}</span>
                    </a>
                    <a href="https://github.com/wesselvandalen" target='_blank' rel='noreferrer'>
                        <img src={githubIcon} alt="GitHub icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/wesselvandalen" target='_blank' rel='noreferrer'>
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://stackoverflow.com/users/24017710/wesseldalen" target='_blank' rel='noreferrer'>
                        <img src={stackoverflowIcon} alt="Stack Overflow icon" />
                        <span>Stack Overflow</span>
                    </a>
                </div>
            </nav>
        </div>
    )
}