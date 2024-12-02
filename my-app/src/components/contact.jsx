import './contact.css';
import { useTranslation } from 'react-i18next';

import smileyFace from '../assets/icons/smiling_face.png';

import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import discord from '../assets/icons/discord.png';

export default function Contact() {
    const [t] = useTranslation("global");

    return (
        <div className="contact-container" id='contact'>
            <div className="contact-content">

                <p className='section-title contact-section-title'>{t('chapters.contact')}</p>

                <div className="contact-innhold">
                    <p>{t('contact.1')}</p>
                    <p>{t('contact.2')} <img className='smiley' src={smileyFace} alt="Smiley face" /></p>

                    <div className="contact-socials">
                        <a href="mailto:wesselvandalen@gmail.com" className='lenke'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            wesselvandalen@gmail.com
                        </a>
                        <a href="https://github.com/wesselvandalen" target='_blank' className='lenke'><img src={github} alt="GitHub icon" /> /wesselvandalen</a>
                        <a href="https://linkedin.com/in/wesselvandalen" target='_blank' className='lenke'><img src={linkedin} alt="LinkedIn icon" /> /wesselvandalen</a>
                        <a href="https://discord.com/users/bjarndal" target='_blank' className='lenke'><img src={discord} alt="Discord icon" /> @bjarndal</a>
                    </div>

                </div>

                <div className="contact-button-container">
                    <a className='top-button' href='#home'>
                        {t('contact.top')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}