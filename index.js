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
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.documentElement.lang = lang;
    const NLLI = document.getElementById('nlli');
    const NOLI = document.getElementById('noli');
    const ESLI = document.getElementById('esli');
    const ENLI = document.getElementById('enli');

    if (lang === 'nl') {
        NLLI.classList.add('active');
        NOLI.classList.remove('active');
        ESLI.classList.remove('active');
        ENLI.classList.remove('active');
        changeLanguageDutch();
    } else if (lang === 'no') {
        NLLI.classList.remove('active');
        NOLI.classList.add('active');
        ESLI.classList.remove('active');
        ENLI.classList.remove('active');
        changeLanguageNorwegian();
    } else if (lang === 'es') {
        NLLI.classList.remove('active');
        NOLI.classList.remove('active');
        ESLI.classList.add ('active');
        ENLI.classList.remove('active');
        changeLanguageEspanol();
    } else {
        NLLI.classList.remove('active');
        NOLI.classList.remove('active');
        ESLI.classList.remove('active');
        ENLI.classList.add('active');
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

function buildSomething() {
    const nlKnop = document.querySelector('#nlknop');
    const enknop = document.querySelector('#enknop');
    const noknop = document.querySelector('#noknop');
    const esknop = document.querySelector('#esknop');

    // https://phuoc.ng/collection/html-dom/change-the-favicon-dynamically-based-on-user-color-scheme-preference/
    const setFavicon = () => {
        const favicon = document.querySelector('link[rel="icon"]');
        favicon.href = (window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'photos/wvd-logo-hvitt.png'
            : 'photos/wvd-logo-svart.png';
    };
    setFavicon();

    let gridContainer = document.querySelector(".grid-container");
    let isVisible = false;

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkFade() {
        if (isElementInViewport(gridContainer)) {
            if (!isVisible) {
                isVisible = true;
                gridContainer.classList.add("active");
            }
        } else {
            if (isVisible) {
                isVisible = false;
                gridContainer.classList.remove("active");
            }
        }
    }

    checkFade();
    document.addEventListener("scroll", checkFade);

    let textLabel = document.querySelector(".text-label");
    let projectContainer = document.querySelector(".ad123");
    let isVis = false;

    function inVP(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function cFade() {
        if (inVP(textLabel) || inVP(projectContainer)) {
            if (!isVis) {
                isVis = true;
                textLabel.classList.add("active");
                projectContainer.classList.add("active");
            }
        } else {
            if (isVis) {
                isVis = false;
                textLabel.classList.remove("active");
                projectContainer.classList.remove("active");
            }
        }
    }

    cFade();
    document.addEventListener("scroll", cFade);

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

    esknop.addEventListener('click', (ev) => {
        changeLanguageEspanol();
        changeLanguage('es');
    })
    ;
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
function changeLanguageEspanol() {
    // home box
    document.getElementById('top-p').textContent = `¡Hola! Mi nombre es Wessel y soy un chico holandés de ${calculateAge()} años.`;
    document.getElementById('bottom-p').textContent = `Soy un full stack software developer & Scrum Master con ganas de aprender.`;

    // tech
    document.getElementById('tech-stack').textContent = "Una muestra de mis conocimientos y herramientas";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROYECTOS";
    document.getElementById('project-p').textContent = "Todos los proyectos en los que he trabajado/estoy trabajando";

    document.getElementById('kpn-description').innerHTML = `
                    KPN necesitaba un sitio web para que sus empleados registraran sus kilómetros, debido a que el gobierno holandés pidió a las cooperativas que lo hicieran debido a <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">esta ley</a>. 
                    Luego, la aplicación calcula las emisiones de CO2 y las muestra en un panel para que las vean los gerentes. También crea un informe en hoja de Excel que contiene todas las emisiones de CO2 de todos los empleados para que KPN lo entregue.
                    <br>
                    Dirección de correo electrónico: manager1@gmail.com<br>
                    Contraseña: managerPass`;
    document.getElementById('todss').textContent = "TODSS' es una solicitud realizada para el departamento de Negocios y Finanzas de la Hogeschool Utrecht. Fue creado para ayudar a los estudiantes de finanzas a practicar todo tipo de relaciones financieras diferentes (cuentas de pérdidas y ganancias, cuentas de balance, flujos de efectivo) tanto para sus exámenes como para su formación personal. Las tareas debían generarse aleatoriamente cada vez y el estudiante tenía que recibir comentarios sobre su tarea para beneficiar plenamente la práctica.";

    document.getElementById('scroll').textContent = 'Desplácese hacia abajo';
    document.getElementById('contact-h2').textContent = 'LLEGAR A MÍ';
    document.getElementById('contact-p').textContent = 'Envíame un correo electrónico si estás interesado';

    // footer
    document.querySelector('#cv-a').textContent = 'Mira mi CV';
}