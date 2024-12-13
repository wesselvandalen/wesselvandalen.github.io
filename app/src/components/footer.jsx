import { useTranslation } from 'react-i18next';
import './footer.css';

export default function Footer() {
    const [t] = useTranslation("global");

    return (
        <div className="footer-container">

            <p className='copyright'>© {new Date().getFullYear()} Wessel van Dalen</p>
            <p className='message'>{t('footer.message1')}</p>
            <p className='message'>
                {t('footer.message2').split('{mail}')[0]}
                <a href="mailto:wesselvandalen@gmail.com">{t('footer.mail')}</a>
                {t('footer.message2').split('{mail}')[1]}
            </p>

        </div>
    );
}