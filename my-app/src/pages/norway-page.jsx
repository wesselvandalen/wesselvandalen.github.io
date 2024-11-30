import './norway-page.css';
import { useTranslation } from 'react-i18next';
import preikestolen from '../assets/preikestolen.jpg';
import norwayFlag from '../assets/graphics/norwayFlag.png';

export default function NorwayPage() {
    const [translation] = useTranslation("global");

    function calculateLearningYears() {
        let dob = new Date("01/08/2019");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    return (
        <div className="n-container">
            <div className="n-content">

                <div className="n-top">
                    <div className="n-title-container">
                        <img src={norwayFlag} alt="Norwegian flag icon" />
                        <h2>{translation('header.norway')}</h2>
                    </div>
                    <p>{translation('norway.description')}</p>
                </div>

                <img
                    className='n-image'
                    src={preikestolen}
                    alt="Me at the top of Preikestolen"
                />

                <p className='n-p'>{translation('norway.1').replace('{learningYears}', calculateLearningYears())}</p>
                <p className='n-p'>{translation('norway.2')}</p>
                <p className='n-p'>{translation('norway.3')}</p>
            </div>
        </div>
    );
}