let slideIndex = 1;

addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        changeLanguage('en');
        showDivs(slideIndex);
    }, 100);
});

function changeLanguage(lang) {
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.documentElement.lang = lang;

    if (lang === 'nl') {
        changeLanguageDutch();
    } else if (lang === 'no') {
        changeLanguageNorwegian();
    } else {
        changeLanguageEnglish();
    }
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slide");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    let indexToShow = (slideIndex - 1 + x.length) % x.length;
    x[indexToShow].style.display = "block";
}

function calculateAge() {
    var dob = new Date("01/20/2004");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
}

function buildSomething() {
    //const nlKnop = document.querySelector('#nlknop');
    //const enknop = document.querySelector('#enknop');
    //const noknop = document.querySelector('#noknop');

    /*
    nlKnop.addEventListener('click', (ev) => {
        changeLanguageDutch();
        changeLanguage('nl');
    });

    enknop.addEventListener('click', (ev) => {
        changeLanguageEnglish();
        changeLanguage('en');
    });

    noknop.addEventListener('click', (ev) => {
        changeLanguageNorwegian();
        changeLanguage('no');
    });

     */
}

function changeLanguageDutch() {
    // home box
    document.getElementById('top-p').textContent = `Hoi hoi! Mijn naam is Wessel en ik ben een ${calculateAge()} jaar oude gast uit Nederland.`;
    document.getElementById('bottom-p').textContent = `Ik ben een full stack software developer & Scrum Master die graag leert.`;

    // tech
    document.getElementById('tech-stack').textContent = "Een overzicht van mijn vaardigheden";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROJECTEN";
    document.getElementById('project-p').textContent = "Alle projecten waar ik aan gewerkt heb/aan werk";

    document.getElementById('kpn-description').innerHTML = `
                    KPN had een website nodig waar haar medewerkers hun kilometers konden registreren, omdat de Nederlandse overheid coöperaties hierom vroeg vanwege <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">deze wet</a>. 
                    De applicatie berekent vervolgens de co2-uitstoot en toont dit op een dashboard, zodat de managers dit kunnen zien. Ook wordt er een Excel-sheetrapport aangemaakt met daarin alle co2-uitstoot van alle medewerkers, die KPN kan aanleveren.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Wachtwoord: managerPass`;
    document.getElementById('todss').textContent = "'TODSS' is een applicatie gemaakt voor de afdeling Business en Finance van de Hogeschool Utrecht. Het is gemaakt om financiële studenten te helpen bij het oefenen van allerlei verschillende financiële rapporten (winst- en verliesrekeningen, balansrekeningen, kasstromen) voor zowel hun examens als hun persoonlijke training. De opdrachten moesten elke keer willekeurig worden gegenereerd en de leerling moest feedback krijgen op zijn opdracht om het oefenen ten volle te kunnen benutten.";

    document.getElementById('scroll').textContent = 'Scroll naar beneden';
    document.getElementById('contact-h2').textContent = 'ZOEK CONTACT MET ME';
    document.getElementById('contact-p').textContent = 'Stuur me een email als je geïnteresseerd bent';

    // footer
    document.querySelector('#cv-a').textContent = 'Bekijk mijn CV';
}

function changeLanguageEnglish() {
    /*
    // home box
    document.getElementById('top-p').textContent = `Hey there! My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.`;
    document.getElementById('bottom-p').textContent = `I'm a full stack software developer & Scrum Master eager to learn.`;

    // tech
    document.getElementById('tech-stack').textContent = "A showcase of my knowledge";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROJECTS";
    document.getElementById('project-p').textContent = "All projects I've worked on/am working on";

    document.getElementById('kpn-description').innerHTML = `
                    KPN needed a website for its employees to register their kilometers, due to the Dutch government asking coorperations to do so because of <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> this law</a>. 
                    The application then calculates the co2 emissions, and shows this on a dashboard for the managers to see. It also creates an Excel sheet report containing all the co2 emissions of all employees for KPN to deliver.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Password: managerPass`;
    document.getElementById('todss').textContent = "'TODSS' is an application made for the Business and Finance department at the Hogeschool Utrecht. It was made to help finance students practice all kinds of different financial rapports (profit and loss accounts, balance sheet accounts, cash flows) for both their exams and their personal training. The assignments had to be randomly generated each time, and the student had to get feedback on their assignment to fully benefit the practicing.";

    document.getElementById('scroll').textContent = 'Scroll down';
    document.getElementById('contact-h2').textContent = 'REACH OUT TO ME';
    document.getElementById('contact-p').textContent = "Send me an email if you're interested";

    // footer
    document.querySelector('#cv-a').textContent = 'View my CV';

     */
}

function changeLanguageNorwegian() {
    // home box
    document.getElementById('top-p').textContent = `Heisann! Jeg heter Wessel og jeg er en ${calculateAge()} år gammel fyr fra Nederland.`;
    document.getElementById('bottom-p').textContent = `Jeg er en full stack software developer & Scrum Master og ivrig til å lære.`;

    // tech
    document.getElementById('tech-stack').textContent = "En oversikt av alt kunskap jeg har";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROSJEKT";
    document.getElementById('project-p').textContent = "Alle prosjekt jeg har jobbet på/jobber på";

    document.getElementById('kpn-description').innerHTML = `
                    KPN trengte et nettsted for sine ansatte for å registrere kilometerne sine, på grunn av at den nederlandske regjeringen ba samarbeid om å gjøre det på grunn av <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> denne loven</a>. 
                    Applikasjonen beregner deretter co2-utslippene, og viser dette på et dashbord som lederne kan se. Den lager også en Excel-arkrapport som inneholder alle co2-utslippene til alle ansatte som KPN kan levere.                   
                    <br>
                    E-post adres: manager1@gmail.com<br>
                    Passord: managerPass`;
    document.getElementById('todss').textContent = "'TODSS' er en søknad laget for Business and Finance-avdelingen ved Hogeschool Utrecht. Den ble laget for å hjelpe finansstudenter med å praktisere alle slags forskjellige økonomiske rapporter (resultat- og tapskontoer, balansekontoer, kontantstrømmer) for både eksamen og personlig trening. Oppgavene måtte genereres tilfeldig hver gang, og studenten måtte få tilbakemelding på oppgaven for å få fullt utbytte av øvingen.";

    document.getElementById('scroll').textContent = 'Scroll ned';
    document.getElementById('contact-h2').textContent = 'TA KONTAKT MED MEG';
    document.getElementById('contact-p').textContent = 'Send meg en e-post hvis du er interessert';

    // footer
    document.querySelector('#cv-a').textContent = 'Se på min CV';
}