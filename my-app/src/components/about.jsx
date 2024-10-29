import './about.css';
import { useTranslation } from 'react-i18next';
import Header from './header';
import linkedIn from '../assets/icons/linkedin.png';
import gitHub from '../assets/icons/github.png';
import picture from '../assets/jeg.png';

export default function About() {
    const [translation] = useTranslation("global");

    return (
        <>
            <Header/>
            <div className='about-container vanlig' id="about">
                <div className="about-content">
                    <div className="name-container">
                        <img src={picture} alt="Me" className='profile-picture'/>
                        <h3>Wessel Rowdy Dalen</h3>
                        <div className="location-email">
                            <span className='location'>Houten, Utrecht, {translation('about.country')} · </span>
                            <a href="mailto:wesselvandalen@gmail.com" className='mail'>wesselvandalen@gmail.com</a>
                        </div>
                    </div>
                    <p>{translation('about.description')}</p>
                    <div className="social-icons-container">
                        <a href="https://linkedin.com/in/wesselvandalen/" target='_blank' rel="noreferrer">
                            <img src={linkedIn} alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/wesselvandalen/" target='_blank' rel="noreferrer">
                            <img src={gitHub} alt="GitHub"/>
                        </a>
                    </div>
                </div> 
            </div>
        </>
    );
}