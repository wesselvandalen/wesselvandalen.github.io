export function getCurrentLanguage() {
    const language = localStorage.getItem('language');

    if (language === '' || language === undefined || language === null) {
        setCurrentLanguage('en'); // base language
        return localStorage.getItem('language');
    }

    return language;
}

export function setCurrentLanguage(lang) {
    if (lang === 'nl' || lang === 'no' || lang === 'en') {
        localStorage.setItem('language', lang);   
    } else {
        console.error(`The language ${lang} does not exist within this application.`);
    }
}