addEventListener("DOMContentLoaded", (event) => {
    handleCookies();
    setTimeout(() => {
        buildSomething();
    }, 100);
});

function handleCookies() {
    const languageFromCookie = checkForCookies();

    if (languageFromCookie === '' || languageFromCookie === null) {
        changeLanguage('en');
    } else {
        changeLanguage(languageFromCookie);
    }
}

function changeLanguage(lang) {
    document.cookie = `language=${lang}`;

    if (lang === 'nl') {
        changeLanguageDutch();
    } else if (lang === 'nobm') {
        changeLanguageNorwegianBokmal();
    } else if (lang === 'nony') {
        changeLanguageNorwegianNynorsk();
    } else {
        changeLanguageEnglish();
    }
}


function checkForCookies() {
    const existingLanguageCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('language='));
    const languageFromCookie = existingLanguageCookie ? existingLanguageCookie.split('=')[1] : null;

    if (languageFromCookie === undefined) {
        return false;
    } else {
        return languageFromCookie;
    }
}

function calculateAge() {
    var dob = new Date("01/20/2004");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
}

function openPopup(event) {
    event.preventDefault();
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

function buildSomething() {
    const popupBtn = document.getElementById('popupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const hamburgerBtn = document.getElementById('hamburger-button');
    const nlKnop = document.querySelector('#nlknop');
    const enknop = document.querySelector('#enknop');
    const nonbknop = document.querySelector('#nonbknop');
    const nonyknop = document.querySelector('#nonyknop');

    // https://phuoc.ng/collection/html-dom/change-the-favicon-dynamically-based-on-user-color-scheme-preference/
    const setFavicon = () => {
        const favicon = document.querySelector('link[rel="icon"]');
        favicon.href = (window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'src/main/webapp/bilder/wvd-logo-hvitt.png'
            : 'src/main/webapp/bilder/wvd-logo-svart.png';
    };
    setFavicon();

    nlKnop.addEventListener('click', (ev) => {
        changeLanguageDutch();
        changeLanguage('nl');
    });

    enknop.addEventListener('click', (ev) => {
        changeLanguageEnglish();
        changeLanguage('en');
    });

    nonyknop.addEventListener('click', (ev) => {
        changeLanguageNorwegianNynorsk();
        changeLanguage('nony');
    });

    nonbknop.addEventListener('click', (ev) => {
        changeLanguageNorwegianBokmal();
        changeLanguage('nobm');
    });



    popupBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
}

function toggleMenu() {
    var menu = document.getElementById("directory-list");
    menu.classList.toggle("show");
}

function handleKeyPress(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        toggleMenu();
    }
    if (event.key === 'Escape') {
        closeMenu();
    }
}

function closeMenu() {
    const directoryList = document.getElementById('directory-list');
    if (directoryList) {
        directoryList.classList.remove('show');
    }
}

function changeLanguageDutch() {
    document.getElementById('my-projects-a').textContent = "MIJN PROJECTEN";
    document.getElementById('home-a').textContent = "THUISPAGINA";
    document.getElementById('popupBtn').textContent = "MIJN OPLEIDING";
    document.getElementById('mail-a').textContent = "MAIL MIJ";
    document.getElementById('cv-a').textContent = "DOWNLOAD MIJN CV";
    document.getElementById('language-a').textContent = "TALEN";

    document.getElementById('job-title').textContent = '"Visies omzetten naar pixels, project voor project."';

    document.getElementById('personal-description').textContent = `Ik ben een ${calculateAge()} jaar oude man uit Nederland met als hobbies bodybuilden, het leren van Noors (taal & cultuur), en om op avontuur te gaan met mijn hond (Rowdy, Golden Retriever) 🌿`;

    document.getElementById('kpn-description').innerHTML = `Als onderdeel van een gespecialiseerd front-end team werkte ik samen met vier andere leden aan een universiteitsproject om een website te ontwikkelen voor KPN, een vooraanstaand telecommunicatiebedrijf in Nederland. Het project had als doel medewerkers te faciliteren bij het vastleggen van hun reisgegevens voor de berekening van de CO2-uitstoot, conform de wettelijke eisen zoals vastgelegd in het Besluit CO2-reductie werkgebonden personen mobiliteit. <br> <br>
    Email adres: manager1@gmail.com <br>
    Wachtwoord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisbewegingen";

    //document.getElementById('blackjack-description').textContent = "";
    document.documentElement.lang = 'nl';

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";
    document.getElementById('footer-text').innerHTML = 'Als je vragen hebt / geïnteresseerd bent, kun je mij altijd <a id="footer-a" href="mailto:wesselvandalen@gmail.com">een mail sturen</a>';
}

function changeLanguageEnglish() {
    document.getElementById('my-projects-a').textContent = "MY PROJECTS";
    document.getElementById('home-a').textContent = "HOME";
    document.getElementById('popupBtn').textContent = "MY DEGREE";
    document.getElementById('mail-a').textContent = "MAIL ME";
    document.getElementById('cv-a').textContent = "DOWNLOAD MY CV";
    document.getElementById('language-a').textContent = "LANGUAGES";

    document.getElementById('job-title').textContent = '"Turning visions into pixels, one project at a time."';

    document.getElementById('personal-description').textContent = `I am a ${calculateAge()} year old man from the Netherlands with a passion for bodybuilding, learning Norwegian (language & culture), and going on adventure with my dog (Rowdy, Golden Retriever) 🌿`;

    document.getElementById('kpn-description').innerHTML = `
                    KPN needed a website for its employees to register their kilometers, due to the Dutch government asking coorperations to do so because of <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">this law</a>. 
                    The application then calculates the co2 emissions, and shows this on a dashboard for the managers to see. It also creates an Excel sheet report containing all the co2 emissions of all employees for KPN to deliver.
                    <br><br>
                    *Use these to try out the website!<br>
                    Email address: manager1@gmail.com<br>
                    Password: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Travel movements";

    document.documentElement.lang = 'en';
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 years";
    document.getElementById('footer-text').innerHTML = 'If you have any questions / are interested, feel free to <a id="footer-a" href="mailto:wesselvandalen@gmail.com">mail me</a>';

}

function changeLanguageNorwegianBokmal() {
    document.getElementById('my-projects-a').textContent = "PROSJEKTENE MINE";
    document.getElementById('home-a').textContent = "HJEM";
    document.getElementById('popupBtn').textContent = "UTDANNINGEN MIN";
    document.getElementById('mail-a').textContent = "SEND MEG EN E-POST";
    document.getElementById('cv-a').textContent = "LAST NED CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    document.getElementById('job-title').textContent = '"Gjør om visjoner til piksler, ett prosjekt om gangen."';

    document.getElementById('personal-description').textContent = `Jeg er en ${calculateAge()} år gammel mann fra Nederland som er glad i kroppsbygging, det å lære norsk (språket & kulturen), og det å gå på tur med hunden min (Rowdy, Golden Retriever) 🌿`;

    const br = document.createElement('br');
    document.getElementById('kpn-description').innerHTML = `Som en del av et spesialisert front-end-team samarbeidet jeg med fire andre medlemmer for et høyskoleprosjekt for å utvikle et nettsted for KPN, et fremtredende telekommunikasjonsselskap i Nederland. Prosjektet hadde som mål å gjøre det lettere for ansatte å registrere sine reisedetaljer for beregning av CO2-utslipp, i samsvar med lovkravene skissert i Besluit CO2 reductie werkgebonden personen mobiliteit.<br><br>E-post adres: managerPass1@gmail.com<br>Passord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelser";

    document.documentElement.lang = 'no';

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";

    document.getElementById('footer-text').innerHTML = 'Hvis du har noen spørsmål / er interessert, kan du alltid <a id="footer-a" href="mailto:wesselvandalen@gmail.com">sende meg en e-post</a>';

}

function changeLanguageNorwegianNynorsk() {
    document.getElementById('my-projects-a').textContent = "PROSJEKTA MINE";
    document.getElementById('home-a').textContent = "HEIM";
    document.getElementById('popupBtn').textContent = "UTDANNINGA MI";
    document.getElementById('mail-a').textContent = "SEND MEG EIN E-POST";
    document.getElementById('cv-a').textContent = "LAST NED CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    document.getElementById('job-title').textContent = '"Gjer om visjonar til pikslar, eitt prosjekt om gangen."';

    document.getElementById('personal-description').textContent = `Eg er ein ${calculateAge()} år gammal mann frå Nederland som er glad i kroppsbygging, det å lære norsk (språket & kulturen), og det å gå på tur med hunden min (Rowdy, Golden Retriever) 🌿`;

    document.documentElement.lang = 'no';

    document.getElementById('kpn-description').innerHTML = `Som en del av et spesialisert front-end-team samarbeidet jeg med fire andre medlemmer for et høyskoleprosjekt for å utvikle et nettsted for KPN, et fremtredende telekommunikasjonsselskap i Nederland. Prosjektet hadde som mål å gjøre det lettere for ansatte å registrere sine reisedetaljer for beregning av CO2-utslipp, i samsvar med lovkravene skissert i Besluit CO2 reductie werkgebonden personen mobiliteit.<br><br>
        E-post adres: managerPass1@gmail.com<br>
        Passord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelser";

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";

    document.getElementById('footer-text').innerHTML = 'Om du har nokon spørsmål / er interessert, kan du alltid <a id="footer-a" href="mailto:wesselvandalen@gmail.com">sende meg ein e-post</a>';
}