import { useTranslation } from 'react-i18next';
import './certificates.css';

export default function Certificates() {
      const [t] = useTranslation("global");

      return (
            <div className="certificates-container" id='certificates'>

                  <div className="section-div">
                        <p className='section-title'>{t('chapters.certificates')}</p>
                        <div/>
                  </div>

                  <div className="certificates-content">
                        
                        <p>No certificates yet.</p>



                  </div>
            </div>
      );
}