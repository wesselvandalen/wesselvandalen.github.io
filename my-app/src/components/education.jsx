import { useTranslation } from 'react-i18next';
import './education.css';

export default function Education() {
    const [translation] = useTranslation("global");

    return (
        <section className="education-container vanlig" id="education">
            <div className="education-content">

            <h3 className='chapter-title'>{translation('header.education')}</h3>

            <div className="education-inner-content">
                <div className="education-block">
                    <h3>HBO ICT - Software Development</h3>
                    <p className='education-school'>Hogeschool Utrecht</p>
                    <p className='education-date'>{translation('education.hu.date')}</p>
                    <ul>
                        <li>{translation('education.hu.li1')} (240 ECTS)</li>
                        <li>{translation('education.hu.li2')}</li>
                        <li>{translation('education.hu.li3')}</li>
                    </ul>
                </div>
            </div>

            </div>
        </section>
    );
}