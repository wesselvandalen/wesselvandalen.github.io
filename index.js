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

    document.getElementById('kpn-description').innerHTML = `Als onderdeel van een gespecialiseerd front-end team werkte ik samen met vier andere leden aan een universiteitsproject om een ​​website te ontwikkelen voor KPN, een vooraanstaand telecommunicatiebedrijf in Nederland. Het project had als doel medewerkers te faciliteren bij het vastleggen van hun reisgegevens voor de berekening van de CO2-uitstoot, conform de wettelijke eisen zoals vastgelegd in het Besluit CO2-reductie werkgebonden personen mobiliteit. <br> <br>
    Email adres: manager1@gmail.com <br>
    Wachtwoord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisbewegingen";

    //document.getElementById('blackjack-description').textContent = "";
    document.documentElement.lang = 'nl';

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";
    document.getElementById('skill-programming-language-h2').textContent = "Programmeer talen";
    document.getElementById('skill-databases-h2').textContent = "Database / persistentie";
    document.getElementById('skill-databases-p').textContent = "Met PostgreSQL heb ik geleerd hoe ik een database vanaf nul kan opzetten/creëren.\n" +
        "            Ik kan instructies schrijven om gegevens in een database aan te maken, te bewerken, op te halen en te verwijderen, en ook om een\n" +
        "            verbinding te leggen tussen databases en software.";
    //document.getElementById('skill-project-management-p').textContent = "Ik kan hier...";

    document.getElementById('skill-databases-p').innerText = "Met PostgreSQL heb ik geleerd hoe ik een database vanaf nul opzet / creëer. Ik kan statements schrijven om data" +
        " in een database toe te voegen, aan te passen, op te halen en te verwijderen, evenals een connectie leggen tussen databases en software.";

    document.getElementById('skill-programming-language-p').innerHTML = "Ervaring met Java voor meer dan 2 jaar met allerlei verschillende Back end projecten, met frameworks zoals <a target=\"_blank\" class=\"skill-a\" href=\"https://hibernate.org/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/hibernatelogo.png\" alt=\"Hibernate logo\">Hibernate</a> en <a target=\"_blank\" class=\"skill-a\" href=\"https://spring.io/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/springlogo.png\" alt=\"Spring logo\">Spring</a>.\n" +
        "                Ik heb vele verschillende websites gebouwd doormiddel van Vanilla JS, CSS en HTML, met frameworks en libraries zoals <a target=\"_blank\" class=\"skill-a\" href=\"https://react.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/reactlogo.png\" alt=\"React logo\">React</a> en <a target=\"_blank\" class=\"skill-a\" href=\"https://lit.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/litlogo.png\" alt=\"Lit logo\">Lit</a>.\n" +
        "                Ik heb ook een beetje ervaring met Python, aangezien dat mijn eerste programmeertaal was, waar ik simpele applicaties mee heb gemaakt met Tkinter.";

    document.getElementById('skill-info-p').innerHTML = "Verder heb ik programmas gebruikt zoals <a class=\"skill-a\" target=\"_blank\" href=\"https://www.postman.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/postmanlogo.png\" alt=\"Postman logo\">Postman</a>\n" +
        "                en <a target=\"_blank\" class=\"skill-a\" href=\"https://www.docker.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/Docker-Logo.png\" alt=\"Docker logo\">Docker</a> in veel van mijn projecten.\n" +
        "                Ik heb gewerkt met IDE's zoals <a target=\"_blank\" class=\"skill-a\" href=\"https://www.jetbrains.com/idea/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/inteallijidealogo.png\" alt=\"Inteallij IDEA logo\">Inteallij IDEA</a>\n" +
        "                en <a target=\"_blank\" class=\"skill-a\" href=\"https://code.visualstudio.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualstudiocode.png\" alt=\"Visual Studio Code logo\">Visual Studio Code</a>, en heb\n" +
        "                UML diagrammen getekent (klassen-diagrammen, sequence-diagrammen en logical component models) met\n" +
        "                <a target=\"_blank\" class=\"skill-a\" href=\"https://www.visual-paradigm.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualparadigmlogo.png\" alt=\"Visual Paradigm logo\">Visual Paradigm</a>.";

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

    document.getElementById('kpn-description').innerHTML = `As part of a specialized front-end team, I collaborated with four other members for a college project to develop a website for KPN, a prominent telecommunications company in the Netherlands. The project aimed to facilitate employees in recording their travel details for the calculation of CO2 emissions, in compliance with the legal requirements outlined in the Besluit CO2 reductie werkgebonden personen mobiliteit.
                    <br><br>
                    Email address: manager1@gmail.com <br>
                    Password: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Travel movements";

    document.documentElement.lang = 'en';

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 years";
    document.getElementById('skill-programming-language-h2').textContent = "Programming languages";
    document.getElementById('skill-databases-h2').textContent = "Database / persistence";
    document.getElementById('skill-databases-p').innerText = "With PostgreSQL I have learned how to set up / create a database from scratch.\n" +
        "            I can write statements to create, edit, retrieve and delete data from a database, as well as laying a\n" +
        "            connection between databases and software.";
    document.getElementById('skill-programming-language-p').innerHTML = "Experience with Java for over 2 years on all kinds of different Back end projects, with frameworks such as <a target=\"_blank\" class=\"skill-a\" href=\"https://hibernate.org/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/hibernatelogo.png\" alt=\"Hibernate logo\">Hibernate</a> and <a target=\"_blank\" class=\"skill-a\" href=\"https://spring.io/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/springlogo.png\" alt=\"Spring logo\">Spring</a>.\n" +
        "                I have built all kinds of websites using Vanilla JS, CSS and HTML, using frameworks and libraries like <a target=\"_blank\" class=\"skill-a\" href=\"https://react.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/reactlogo.png\" alt=\"React logo\">React</a> and <a target=\"_blank\" class=\"skill-a\" href=\"https://lit.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/litlogo.png\" alt=\"Lit logo\">Lit</a>.\n" +
        "                Also a bit experience with Python, since that was my first programming language, having created simple applications with Tkinter.";

    document.getElementById('skill-info-p').innerHTML = 'Furthermore have I used tools like <a class="skill-a" target="_blank" href="https://www.postman.com/"><img class="skill-a-image" src="src/main/webapp/bilder/skillicons/postmanlogo.png" alt="Postman logo">Postman</a>\n' +
        '                and <a target="_blank" class="skill-a" href="https://www.docker.com/"><img class="skill-a-image" src="src/main/webapp/bilder/skillicons/Docker-Logo.png" alt="Docker logo">Docker</a> througout a lot of my projects.\n' +
        '                I\'ve worked with IDE\'s like <a target="_blank" class="skill-a" href="https://www.jetbrains.com/idea/"><img class="skill-a-image" src="src/main/webapp/bilder/skillicons/inteallijidealogo.png" alt="Inteallij IDEA logo">Inteallij IDEA</a>\n' +
        '                and <a target="_blank" class="skill-a" href="https://code.visualstudio.com/"><img class="skill-a-image" src="src/main/webapp/bilder/skillicons/visualstudiocode.png" alt="Visual Studio Code logo">Visual Studio Code</a>, and have\n' +
        '                drawn UML diagrams (class-diagrams, sequence-diagrams and logical component models) with\n' +
        '                <a target="_blank" class="skill-a" href="https://www.visual-paradigm.com/"><img class="skill-a-image" src="src/main/webapp/bilder/skillicons/visualparadigmlogo.png" alt="Visual Paradigm logo">Visual Paradigm</a>.';

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

    document.getElementById('skill-programming-language-h2').textContent = "Programmeringsspråk";
    document.getElementById('skill-databases-h2').textContent = "Database / lagring";
    document.getElementById('skill-databases-p').innerText = "Med PostgreSQL har jeg lært hvordan jeg setter opp / oppretter en database fra bunnen av. " +
        "Jeg kan skrive kommandoer for å lagre, redigere, hente og fjerne data fra en database, samt etablere en tilkobling mellom databaser og programvare.";
    document.getElementById('skill-programming-language-p').innerHTML = "Erfaring med Java i over 2 år på mange forskjellige Back end prosjekter, med rammverke som <a target=\"_blank\" class=\"skill-a\" href=\"https://hibernate.org/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/hibernatelogo.png\" alt=\"Hibernate logo\">Hibernate</a> og <a target=\"_blank\" class=\"skill-a\" href=\"https://spring.io/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/springlogo.png\" alt=\"Spring logo\">Spring</a>.\n" +
        "                Jeg har bygget mange forskjellige nettsider med Vanilla JS, CSS og HTML, med hjelp av frameworks og libraries som <a target=\"_blank\" class=\"skill-a\" href=\"https://react.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/reactlogo.png\" alt=\"React logo\">React</a> og <a target=\"_blank\" class=\"skill-a\" href=\"https://lit.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/litlogo.png\" alt=\"Lit logo\">Lit</a>.\n" +
        "                Jeg har også litegrann erfaring med Python, siden det var mitt første programmeringsspråk, som jeg brukte til å lage enkle applikasjoner med Tkinter.";

    document.getElementById('skill-info-p').innerHTML = "Jeg har også brukt programmer som <a class=\"skill-a\" target=\"_blank\" href=\"https://www.postman.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/postmanlogo.png\" alt=\"Postman logo\">Postman</a>\n" +
        "                og <a target=\"_blank\" class=\"skill-a\" href=\"https://www.docker.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/Docker-Logo.png\" alt=\"Docker logo\">Docker</a> i mange av prosjektene mine.\n" +
        "                Jeg har jobbet med IDE's sånn som <a target=\"_blank\" class=\"skill-a\" href=\"https://www.jetbrains.com/idea/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/inteallijidealogo.png\" alt=\"Inteallij IDEA logo\">Inteallij IDEA</a>\n" +
        "                og <a target=\"_blank\" class=\"skill-a\" href=\"https://code.visualstudio.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualstudiocode.png\" alt=\"Visual Studio Code logo\">Visual Studio Code</a>, og har\n" +
        "                tegnet UML diagrammer (klasse-diagrammer, sequence-diagrammer og logiske komponentmodeller) med\n" +
        "                <a target=\"_blank\" class=\"skill-a\" href=\"https://www.visual-paradigm.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualparadigmlogo.png\" alt=\"Visual Paradigm logo\">Visual Paradigm</a>.";

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

    document.getElementById('skill-programming-language-h2').textContent = "Programmeringsspråk";
    document.getElementById('skill-databases-h2').textContent = "Database / lagring";
    document.getElementById('skill-databases-p').innerText = "Med PostgreSQL har eg lært korleis eg set opp/opprettar ein database frå botnen av. Eg kan skrive kommandoar for å opprette, redigere, hente og slette data frå ein database, samt etablere ei tilkopling mellom databasar og programvare.";
    document.getElementById('skill-programming-language-p').innerHTML = "Erfaring med Java i over 2 år på ulike typer backend-prosjekt, med rammeverk som <a target=\"_blank\" class=\"skill-a\" href=\"https://hibernate.org/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/hibernatelogo.png\" alt=\"Hibernate logo\">Hibernate</a> og <a target=\"_blank\" class=\"skill-a\" href=\"https://spring.io/\"> <img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/springlogo.png\" alt=\"Spring logo\">Spring</a>.\n" +
        "                Eg har bygd ulike nettsider ved å bruke Vanilla JS, CSS og HTML, samt rammeverk og bibliotek som <a target=\"_blank\" class=\"skill-a\" href=\"https://react.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/reactlogo.png\" alt=\"React logo\">React</a> og <a target=\"_blank\" class=\"skill-a\" href=\"https://lit.dev/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/litlogo.png\" alt=\"Lit logo\">Lit</a>.\n" +
        "                Har også litt erfaring med Python, sidan det var mitt første programmeringsspråk, og har laga enkle applikasjonar med Tkinter.";

    document.getElementById('skill-info-p').innerHTML = "Vidare har eg brukt program som <a class=\"skill-a\" target=\"_blank\" href=\"https://www.postman.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/postmanlogo.png\" alt=\"Postman logo\">Postman</a>\n" +
        "                og <a target=\"_blank\" class=\"skill-a\" href=\"https://www.docker.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/Docker-Logo.png\" alt=\"Docker logo\">Docker</a> i mange av prosjekta mine.\n" +
        "                Eg har arbeidd med IDE-ar som <a target=\"_blank\" class=\"skill-a\" href=\"https://www.jetbrains.com/idea/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/inteallijidealogo.png\" alt=\"Inteallij IDEA logo\">Inteallij IDEA</a>\n" +
        "                og <a target=\"_blank\" class=\"skill-a\" href=\"https://code.visualstudio.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualstudiocode.png\" alt=\"Visual Studio Code logo\">Visual Studio Code</a>, og har teikna UML-diagram (klasse-diagram, sequence-diagram og logiske komponentmodellar) med\n" +
        "                <a target=\"_blank\" class=\"skill-a\" href=\"https://www.visual-paradigm.com/\"><img class=\"skill-a-image\" src=\"src/main/webapp/bilder/skillicons/visualparadigmlogo.png\" alt=\"Visual Paradigm logo\">Visual Paradigm</a>.";

    document.getElementById('footer-text').innerHTML = 'Om du har nokon spørsmål / er interessert, kan du alltid <a id="footer-a" href="mailto:wesselvandalen@gmail.com">sende meg ein e-post</a>';
}