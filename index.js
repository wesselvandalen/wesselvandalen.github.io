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
    document.getElementById('tech-stack').textContent = "Een collectie van technologiën die ik in mijn projecten heb gebruikt💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "MIJN PROJECTEN";
    document.getElementById('project-p').textContent = "Ieder project is een uniek stuk development🎨";
    document.getElementById('kpn-title').textContent = "KPN Reisbewegingen";
    document.getElementById('kpn-description').innerHTML = `KPN had een website nodig waar haar medewerkers hun kilometers konden registreren, omdat de Nederlandse overheid coöperaties hierom vroeg vanwege <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">deze wet</a>.
                    De applicatie berekent vervolgens de co2-uitstoot en toont dit op een dashboard, zodat de managers dit kunnen zien. Ook wordt er een Excel-sheetrapport aangemaakt met daarin alle co2-uitstoot van alle medewerkers, die KPN kan aanleveren.Email adres: manager1@gmail.com <br>
    Wachtwoord: managerPass`;
    document.getElementById('elektriker.no-description').innerHTML = `Elektriker.no (*Elektriker is Noors voor elektricien) is een platform dat Noren verbindt met ervaren elektriciens voor verschillende elektrische taken, van het repareren van stopcontacten tot het installeren van verlichtingssystemen. Het vereenvoudigt het proces van het vinden van betrouwbare hulp voor elektrische behoeften. Dit project toont mijn expertise in zowel de front- als back-end, inclusief testen voor kwaliteitsborging.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";
    document.getElementById('last-text').textContent = "En meer projecten nog te gaan...";
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
    document.getElementById('tech-stack').textContent = "A collection of technologies I've used throughout my projects💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "MY PROJECTS";
    document.getElementById('project-p').textContent = "Each project is a unique piece of development🎨";
    document.getElementById('kpn-title').textContent = "KPN Travel movements";
    document.getElementById('kpn-description').innerHTML = `
                    KPN needed a website for its employees to register their kilometers, due to the Dutch government asking coorperations to do so because of <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> this law</a>. 
                    The application then calculates the co2 emissions, and shows this on a dashboard for the managers to see. It also creates an Excel sheet report containing all the co2 emissions of all employees for KPN to deliver.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Password: managerPass`;
    document.getElementById('bilrent-description').innerHTML = `Bilrent offers a convenient and reliable solution for car rental in several Norwegian cities, including Oslo, Bergen and Stavanger. With a simple and user-friendly web interface, we provide customers the opportunity to find and book cars at a suitable location and time.`;

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 years";
    document.getElementById('last-text').textContent = "And many more projects to come...";
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
    document.getElementById('tech-stack').textContent = "En kolleksjon av teknologier som jeg har brukt i prosjektene mine💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROSJEKTENE MINE";
    document.getElementById('project-p').textContent = "Hvert prosjekt er et unikt stykke utvikling🎨";
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
    document.getElementById('last-text').textContent = "Og mange flere prosjekter som kommer...";
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
    document.getElementById('tech-stack').textContent = "Ein kolleksjon av teknologiar som eg har brukt i prosjektane mine💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROSJEKTANE MINE";
    document.getElementById('project-p').textContent = "Kvert prosjekt er eit unikt stykke utvikling🎨";
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
    document.getElementById('last-text').textContent = "Og mange fleire prosjektar som kjem...";
}