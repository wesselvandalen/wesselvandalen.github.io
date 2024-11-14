import './about.css';
import { useTranslation } from 'react-i18next';
import Header from './header';

export default function About() {
    const [translation] = useTranslation("global");
    
    function calculateAge() {
        let dob = new Date("01/20/2004");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    };

    return (
        <>
            <Header/>
            <div className='about-container vanlig' id='about'>
                <div className="about-content">
                    <div className="name-container">
                        <div className="profile-picture"/>
                        <h3>Wessel Rowdy van Dalen</h3>
                        <p className='profile-role'>Full Stack Software Engineer</p>
                    </div>

                    <p className='profile-description'>
                        {translation('about.description')
                            .replace('{age}', calculateAge())}
                    </p>

                    <div className="links-container">
                        <a href="https://github.com/wesselvandalen/" target='_blank' className='lenke'>GitHub</a>
                        <a href="https://linkedin.com/in/wesselvandalen/" target='_blank' className='lenke'>LinkedIn</a>
                        <a href="mailto:wesselvandalen@gmail.com" className='lenke'>wesselvandalen@gmail.com</a>
                    </div>
                </div> 
            </div>
        </>
    );
}