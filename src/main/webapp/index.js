addEventListener("DOMContentLoaded", (event) => {
    changeLanguageEnglish();
});

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

document.addEventListener('DOMContentLoaded', function () {
    const popupBtn = document.getElementById('popupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    popupBtn.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
});

function changeLanguageDutch() {
    document.getElementById('my-projects-a').textContent = "MIJN PROJECTEN";
    document.getElementById('home-a').textContent = "THUISPAGINA";
    document.getElementById('popupBtn').textContent = "MIJN OPLEIDING";
    document.getElementById('mail-a').textContent = "MAIL MIJ";
    document.getElementById('cv-a').textContent = "DOWNLOAD MIJN CV";
    document.getElementById('language-a').textContent = "TALEN";

    document.getElementById('job-title').textContent = "Ervaren full-stack engineer met vaardigheid in PostgreSQL, SCRUM (Agile) en diagrammodellering.";

    document.getElementById('personal-description').textContent = `Ik ben een ${calculateAge()} jaar oude man uit Nederland met als hobbies bodybuilden, het leren van Noors (taal & cultuur), en om op avontuur te gaan met mijn hond (Rowdy, Golden Retriever) 🌿`;

    document.getElementById('kpn-description').innerHTML = `Als onderdeel van een gespecialiseerd front-end team werkte ik samen met vier andere leden aan een universiteitsproject om een ​​website te ontwikkelen voor KPN, een vooraanstaand telecommunicatiebedrijf in Nederland. Het project had als doel medewerkers te faciliteren bij het vastleggen van hun reisgegevens voor de berekening van de CO2-uitstoot, conform de wettelijke eisen zoals vastgelegd in het Besluit CO2-reductie werkgebonden personen mobiliteit. <br> <br>
    Email adres: manager1@gmail.com <br>
    Wachtwoord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisbewegingen";

    //document.getElementById('blackjack-description').textContent = "";
    document.documentElement.lang = 'nl';

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";
}

function changeLanguageEnglish() {
    document.getElementById('my-projects-a').textContent = "MY PROJECTS";
    document.getElementById('home-a').textContent = "HOME";
    document.getElementById('popupBtn').textContent = "MY DEGREE";
    document.getElementById('mail-a').textContent = "MAIL ME";
    document.getElementById('cv-a').textContent = "DOWNLOAD MY CV";
    document.getElementById('language-a').textContent = "LANGUAGES";

    document.getElementById('job-title').textContent = "Experienced full-stack engineer with proficiency in PostgreSQL, SCRUM (Agile) and diagram modeling.";

    document.getElementById('personal-description').textContent = `I am a ${calculateAge()} year old man from the Netherlands with a passion for bodybuilding, learning Norwegian (language & culture), and going on adventure with my dog (Rowdy, Golden Retriever) 🌿`;

    document.getElementById('kpn-description').innerHTML = `As part of a specialized front-end team, I collaborated with four other members for a college project to develop a website for KPN, a prominent telecommunications company in the Netherlands. The project aimed to facilitate employees in recording their travel details for the calculation of CO2 emissions, in compliance with the legal requirements outlined in the Besluit CO2 reductie werkgebonden personen mobiliteit.
                    <br><br>
                    Email address: manager1@gmail.com <br>
                    Password: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Travel movements";

    document.documentElement.lang = 'en';

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 years";
}

function changeLanguageNorwegianBokmal() {
    document.getElementById('my-projects-a').textContent = "PROSJEKTENE MINE";
    document.getElementById('home-a').textContent = "HJEM";
    document.getElementById('popupBtn').textContent = "UTDANNINGEN MIN";
    document.getElementById('mail-a').textContent = "SEND MEG EN E-POST";
    document.getElementById('cv-a').textContent = "LAST NED CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    document.getElementById('job-title').textContent = "Erfaren full-stack ingeniør med ferdigheter i PostgreSQL, SCRUM (Agile) og diagrammodellering.";

    document.getElementById('personal-description').textContent = `Jeg er en ${calculateAge()} år gammel mann fra Nederland som er glad i kroppsbygging, det å lære norsk (språket & kulturen), og det å gå på tur med hunden min (Rowdy, Golden Retriever) 🌿`;

    const br = document.createElement('br');
    document.getElementById('kpn-description').innerHTML = `Som en del av et spesialisert front-end-team samarbeidet jeg med fire andre medlemmer for et høyskoleprosjekt for å utvikle et nettsted for KPN, et fremtredende telekommunikasjonsselskap i Nederland. Prosjektet hadde som mål å gjøre det lettere for ansatte å registrere sine reisedetaljer for beregning av CO2-utslipp, i samsvar med lovkravene skissert i Besluit CO2 reductie werkgebonden personen mobiliteit.<br><br>E-post adres: managerPass1@gmail.com<br>Passord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelser";

    document.documentElement.lang = 'no';

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";
}

function changeLanguageNorwegianNynorsk() {
    document.getElementById('my-projects-a').textContent = "PROSJEKTA MINE";
    document.getElementById('home-a').textContent = "HEIM";
    document.getElementById('popupBtn').textContent = "UTDANNINGA MI";
    document.getElementById('mail-a').textContent = "SEND MEG EIN E-POST";
    document.getElementById('cv-a').textContent = "LAST NED CV-EN MIN";
    document.getElementById('language-a').textContent = "SPRÅK";

    document.getElementById('job-title').textContent = "Erfaren full-stack ingeniør med ferdigheiter i PostgreSQL, SCRUM (Agile) og diagrammodellering.";

    document.getElementById('personal-description').textContent = `Eg er ein ${calculateAge()} år gammal mann frå Nederland som er glad i kroppsbygging, det å lære norsk (språket & kulturen), og det å gå på tur med hunden min (Rowdy, Golden Retriever) 🌿`;

    document.documentElement.lang = 'no';

    document.getElementById('kpn-description').innerHTML = `Som en del av et spesialisert front-end-team samarbeidet jeg med fire andre medlemmer for et høyskoleprosjekt for å utvikle et nettsted for KPN, et fremtredende telekommunikasjonsselskap i Nederland. Prosjektet hadde som mål å gjøre det lettere for ansatte å registrere sine reisedetaljer for beregning av CO2-utslipp, i samsvar med lovkravene skissert i Besluit CO2 reductie werkgebonden personen mobiliteit.<br><br>
        E-post adres: managerPass1@gmail.com<br>
        Passord: managerPass`;
    document.getElementById('kpn-title').textContent = "KPN Reisebevegelser";

    //document.getElementById('blackjack-description').textContent = "";

    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";
}