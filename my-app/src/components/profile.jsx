import { useTranslation } from 'react-i18next';

export default function Profile() {
    const [translation] = useTranslation("global");

    return (
        <div className='profile-container vanlig' id='profile'>
            <div className="profile-content">

                <h3 className='chapter-title'>{translation('header.profile')}</h3>

                <p style={{ color: 'black', marginBottom: '30px' }}>{translation('profile.1')}</p>
                <p style={{ color: 'black', marginBottom: '30px' }}>{translation('profile.2')}</p>
                <p style={{ color: 'black' }}>{translation('profile.3')}</p>

            </div>
        </div>
    );
}