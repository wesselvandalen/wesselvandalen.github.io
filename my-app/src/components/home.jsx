import './home.css';
import { useTranslation } from 'react-i18next';
import LanguageMenu from './language-menu';
import cool from '../assets/cool.mp4';
import signature from '../assets/signature.png';

export default function Home() {
    const [t] = useTranslation("global");

    return (
        <div className="home-container" id='home' >
            <div className="home-content">

                <div className="header-container">
                    <div className='header-info'>
                        <a href="/">
                            <img src={signature} alt="Logo (Norway)" />
                        </a>
                    </div>
                    <div className="header-links">
                        <LanguageMenu/>
                        <p>|</p>
                        <a href="#about">{t('chapters.about')}</a>
                        <a href="#education">{t('chapters.education')}</a>
                        <a href="#work">{t('chapters.work')}</a>
                        <a href="#stack">Stack</a>
                    </div>
                </div>

                <div className="home-text-wrapper">
                    <h3>Hallaisen! {t('home.intro')} Wessel van Dalen.</h3>
                    <h1>{t('home.maintext')}</h1>
                </div>

                <div className="img-container">
                      <video className='video' autoPlay muted loop >
                        <source src={cool} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
    );
}