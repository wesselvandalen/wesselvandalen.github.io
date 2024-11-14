import { useTranslation } from 'react-i18next';
import './education.css';

export default function Education() {
    const [translation] = useTranslation("global");

    return (
        <section className="education-container vanlig" id="education">
            <div className="education-content">
                <h2 className="component-title">{translation('education.title')}</h2>
                <div className="education-info-wrapper">
                    <div className="education-info">
                        <h3 className="education-university">Hogeschool Utrecht</h3>
                        <div className="education-name">
                            HBO ICT Software Development - Bachelor
                        </div>
                        <p>{translation('education.text1')}</p>
                        <p>{translation('education.text2')}</p>
                    </div>
                    <div className="project-date">
                        <span className="text-primary">2022 - 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
}