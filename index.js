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
            ? 'bilder/wvd-logo-hvitt.png'
            : 'bilder/wvd-logo-svart.png';
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
    document.documentElement.lang = 'nl';

    // top div
    document.getElementById('popupBtn').textContent = "BEKIJK MIJN OPLEIDING";
    document.getElementById('mail-a').textContent = "STUUR ME EEN MAIL";
    document.getElementById('cv-a').textContent = "BEKIJK MIJN CV";
    document.getElementById('language-a').textContent = "TALEN";

    // home box
    document.getElementById('personal-description').textContent = `Ik ben een gast van ${calculateAge()} jaar geboren in Nederland. Ik heb als hobbies bodybuilden, het leren van Noors (taal & cultuur) en op avontuur gaan met mijn hond (Rowdy, Golden Retriever)!`;

    // tech
    document.getElementById('tech-h2-text').textContent = "TECHNOLOGIEËN WAARMEE IK GEWERKT HEB";

    // projects
    document.getElementById('kpn-title').textContent = "KPN Reisbewegingen";
    document.getElementById('kpn-description').innerHTML = `KPN had een website nodig waar haar medewerkers hun kilometers konden registreren, omdat de Nederlandse overheid coöperaties hierom vroeg vanwege <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">deze wet</a>.
                    De applicatie berekent vervolgens de co2-uitstoot en toont dit op een dashboard, zodat de managers dit kunnen zien. Ook wordt er een Excel-sheetrapport aangemaakt met daarin alle co2-uitstoot van alle medewerkers, die KPN kan aanleveren.Email adres: manager1@gmail.com <br>
    Wachtwoord: managerPass`;
    document.getElementById('elektriker.no-description').innerHTML = `Elektriker.no (*Elektriker is Noors voor elektricien) is een platform dat Noren verbindt met ervaren elektriciens voor verschillende elektrische taken, van het repareren van stopcontacten tot het installeren van verlichtingssystemen. Het vereenvoudigt het proces van het vinden van betrouwbare hulp voor elektrische behoeften. Dit project toont mijn expertise in zowel de front- als back-end, inclusief testen voor kwaliteitsborging.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";

    // footer
    document.getElementById('footer-text').innerHTML = 'Als je vragen hebt / geïnteresseerd bent, kun je mij altijd <a id="footer-a" href="mailto:wesselvandalen@gmail.com">een mail sturen</a>';
}

function changeLanguageEnglish() {
    document.documentElement.lang = 'en';

    // top div
    document.getElementById('popupBtn').textContent = "VIEW MY DEGREE";
    document.getElementById('mail-a').textContent = "MAIL ME";
    document.getElementById('cv-a').textContent = "VIEW MY CV";
    document.getElementById('language-a').textContent = "LANGUAGES";

    // home box
    document.getElementById('personal-description').textContent = `I am a ${calculateAge()} year old guy born in the Netherlands. My hobbies are bodybuilding, learning Norwegian (language & culture) and going on adventure with my dog (Rowdy, Golden Retriever)!`;

    // tech
    document.getElementById('tech-h2-text').textContent = "TECHNOLOGIES I'VE WORKED WITH";

    // projects
    document.getElementById('kpn-title').textContent = "KPN Travel movements";
    document.getElementById('kpn-description').innerHTML = `
                    KPN needed a website for its employees to register their kilometers, due to the Dutch government asking coorperations to do so because of <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> this law</a>. 
                    The application then calculates the co2 emissions, and shows this on a dashboard for the managers to see. It also creates an Excel sheet report containing all the co2 emissions of all employees for KPN to deliver.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Password: managerPass`;
    document.getElementById('elektriker.no-description').innerHTML = `Elektriker.no (*Elektriker is Norwegian for electrician) is a platform connecting Norwegians with skilled electricians for various electrical tasks, from fixing power outlets to installing lighting systems. It simplifies the process of finding reliable help for electrical needs. This project demonstrates my expertise in both the front- and back-end, including testing for quality assurance.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 years";

    // footer
    document.getElementById('footer-text').innerHTML = 'If you have any questions / are interested, feel free to <a id="footer-a" href="mailto:wesselvandalen@gmail.com">mail me</a>';
}

function changeLanguageNorwegianBokmal() {
    document.documentElement.lang = 'no';

    // top div
    document.getElementById('popupBtn').textContent = "SE UTDANINGEN MIN";
    document.getElementById('mail-a').textContent = "SEND MEG EN E-POST";
    document.getElementById('cv-a').textContent = "SE CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    // home box
    document.getElementById('personal-description').textContent = `Jeg er en ${calculateAge()} år gammel fyr født i Nederland. Hobbyene mine er kroppsbygging, det å lære meg norsk (språket & kulturen) og det å dra på tur med hunden min (Rowdy, Golden Retriever)!`;

    // tech
    document.getElementById('tech-h2-text').textContent = "TEKNOLOGIER JEG HAR JOBBA MED";

    // projects
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelser";
    document.getElementById('kpn-description').innerHTML = `
                    KPN trengte en nettside til sine ansatte for å registrere kilometerne sine. Dette var på grunn av at den nederlandske regjeringen spurte alle nederlandske bedrifter å gjøre det på grunn av <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">denne loven</a>.
                    Applikasjonen beregner deretter co2-utslippene, og viser dette på et dashbord som managerne kan se. Den lager også Excel-arkrapport som inneholder alle co2-utslippene til alle ansatte som KPN kan levere.
                    <br>
                    E-post adres: manager1@gmail.com<br>
                    Passord: managerPass`;
    document.getElementById('elektriker.no-description').innerHTML = `Elektriker.no er en plattform som forbinder nordmenn med dyktige elektrikere for ulike elektriske oppgaver, fra å fikse strømuttak til å installere lysanlegg. Det forenkler prosessen med å finne pålitelig hjelp til elektriske behov. Dette prosjektet demonstrerer min ekspertise innen både front- og back-end, inkludert testing for kvalitetssikring.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";

    // footer
    document.getElementById('footer-text').innerHTML = 'Hvis du har noen spørsmål / er interessert, kan du alltid <a id="footer-a" href="mailto:wesselvandalen@gmail.com">sende meg en e-post</a>';
}

function changeLanguageNorwegianNynorsk() {
    document.documentElement.lang = 'no';

    // top div
    document.getElementById('popupBtn').textContent = "SJÅ UTDANNINGA MI";
    document.getElementById('mail-a').textContent = "SEND MEG EIN E-POST";
    document.getElementById('cv-a').textContent = "SJÅ CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    // home box
    document.getElementById('personal-description').textContent = `Eg er ein ${calculateAge()} år gammal fyr født i Nederland. Hobbyane mine er kroppsbygging, det å lære meg norsk (språket & kulturen) og det å dra på tur med hunden min (Rowdy, Golden Retriever)!`;

    // tech
    document.getElementById('tech-h2-text').textContent = "TEKNOLOGIER EG HAR JOBBA MED";

    // projects
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelsar";
    document.getElementById('kpn-description').innerHTML = `
                    KPN trengte ein nettside til sine ansatte for å registrere kilometerne sine. Dette grunna den nederlandske regjeringen som spurte alle nederlandske bedriftar å gjere det grunna <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">denne loven</a>.
                    Applikasjonen beregner deretter co2-utslippane, og viser dette på eit dashbord som managerne kan sjå. Den lager óg Excel-arkrapport som inneholder alle co2-utslippene til alle ansatte som KPN kan levere.
                    <br>
                    E-post adres: managerPass1@gmail.com<br>
                    Passord: managerPass`;
    document.getElementById('elektriker.no-description').innerHTML = `Elektriker.no er ein plattform som forbinder nordmenn med dyktige elektrikare for ulike elektriske oppgavar, frå å fikse strømuttak til å installere lysanlegg. Det forenkler prosessen med å finne pålitelig hjelp til elektriske behov. Dette prosjektet demonstrerar min ekspertise innen både front- og back-end, inkludert testing for kvalitetssikring.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";

    // footer
    document.getElementById('footer-text').innerHTML = 'Om du har nokon spørsmål / er interessert, kan du alltid <a id="footer-a" href="mailto:wesselvandalen@gmail.com">sende meg ein e-post</a>';
}