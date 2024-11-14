import { useTranslation } from 'react-i18next';
import './norway.css';

export default function Norway() {
    const [translation] = useTranslation("global");

    return (
        <div className="norway-container vanlig" id='norway'>
            <div className="norway-content">
                <h2 className="component-title">{translation('sidepanel.norway')}</h2>

                <p>{translation('norway.1')}</p>
                <p>{translation('norway.2')}</p>
                <p>
                    {translation('norway.3')
                        .split('{mail}')[0]}
                        <a className='lenke' href="mailto:wesselvandalen@gmail.com">{translation('norway.mail')}</a>
                    {translation('norway.3')
                        .split('{mail}')[1]}
                </p>
            </div>
        </div>
    )
}