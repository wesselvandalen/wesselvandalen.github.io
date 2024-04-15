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

    if (lang === 'nl') {
        changeLanguageDutch();
    } else if (lang === 'no') {
        changeLanguageNorwegian();
    } else if (lang === 'es') {
        changeLanguageEspanol();
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
        var rect = el.getBoundingClientRect();
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

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let formData = new FormData(this);

        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    });

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

    esknop.addEventListener('click', (ev) => {
        changeLanguageEspanol();
        changeLanguage('es');
    })
    ;
     */

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
    // home box
    document.getElementById('personal-description').textContent = `
    ¡Hola! Mijn naam is Wessel en ik ben een ${calculateAge()} jaar oude gast uit Nederland. 
    Ik vind het leuk om boswandelingen te maken met mijn hond, naar de sportschool te gaan & web applicaties te designen en bouwen.
    `;

    // tech
    document.getElementById('tech-stack').textContent = "Een collectie van technologien die ik in mijn projecten heb gebruikt💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROJECTEN";
    document.getElementById('project-p').textContent = "Ieder project is een uniek stuk development🎨";

    document.getElementById('kpn-description').innerHTML = `
                    KPN had een website nodig waar haar medewerkers hun kilometers konden registreren, omdat de Nederlandse overheid coöperaties hierom vroeg vanwege <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">deze wet</a>. 
                    De applicatie berekent vervolgens de co2-uitstoot en toont dit op een dashboard, zodat de managers dit kunnen zien. Ook wordt er een Excel-sheetrapport aangemaakt met daarin alle co2-uitstoot van alle medewerkers, die KPN kan aanleveren.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Wachtwoord: managerPass`;

    // document.getElementById('bilrent-description').innerHTML = `Bilrent offers a convenient and reliable solution for car rental in several Norwegian cities, including Oslo, Bergen and Stavanger. With a simple and user-friendly web interface, we provide customers the opportunity to find and book cars at a suitable location and time.`;

    document.getElementById('last-text').textContent = "En meer projecten nog te gaan...";

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 jaar";

    // footer
    document.querySelector('#footer-p').textContent = 'Geïnteresseerd?';
    document.querySelector('#cv-a').textContent = 'Bekijk mijn CV';
}

function changeLanguageEnglish() {
    // home box
    document.getElementById('top-p').textContent = `¡Hola! My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.`;
    document.getElementById('bottom-p').textContent = `¡Hola! My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.`;

    // tech
    document.getElementById('tech-stack').textContent = "A showcase of my knowledge and tools";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROJECTS";
    document.getElementById('project-p').textContent = "All projects I've worked on / am working on";

    document.getElementById('kpn-description').innerHTML = `
                    KPN needed a website for its employees to register their kilometers, due to the Dutch government asking coorperations to do so because of <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> this law</a>. 
                    The application then calculates the co2 emissions, and shows this on a dashboard for the managers to see. It also creates an Excel sheet report containing all the co2 emissions of all employees for KPN to deliver.
                    <br>
                    Email address: manager1@gmail.com<br>
                    Password: managerPass`;


    // footer
    document.querySelector('#footer-p').textContent = 'Interested?';
    document.querySelector('#cv-a').textContent = 'View my CV';
}

function changeLanguageNorwegian() {
    // home box
    document.getElementById('personal-description').textContent = `
    ¡Hola! Jeg heter Wessel og jeg er en ${calculateAge()} år gammel fyr fra Nederland. 
    Jeg liker å gå på tur med hunden min til skogen, å dra på treningssenteret & å designe og bygge web applikasjoner.
    `;

    // tech
    document.getElementById('tech-stack').textContent = "En kolleksjon av teknologier som jeg har brukt i prosjektene mine💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROSJEKT";
    document.getElementById('project-p').textContent = "Hvert prosjekt er et unikt stykke utvikling🎨";

    document.getElementById('kpn-description').innerHTML = `
                    KPN trengte et nettsted for sine ansatte for å registrere kilometerne sine, på grunn av at den nederlandske regjeringen ba samarbeid om å gjøre det på grunn av <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm"> denne loven</a>. 
                    Applikasjonen beregner deretter co2-utslippene, og viser dette på et dashbord som lederne kan se. Den lager også en Excel-arkrapport som inneholder alle co2-utslippene til alle ansatte som KPN kan levere.                   
                    <br>
                    E-post adres: manager1@gmail.com<br>
                    Passord: managerPass`;

    // document.getElementById('bilrent-description').innerHTML = `Bilrent tilbyr en praktisk og pålitelig løsning for bilutleie i flere norske byer, inkludert Oslo, Bergen og Stavanger. Med et enkelt og brukervennlig webgrensesnitt gir vi kundene muligheten til å finne og bestille biler på passende sted og tidspunkt.`;

    document.getElementById('last-text').textContent = "Og mange flere prosjekt som kommer...";

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 år";

    // footer
    document.querySelector('#footer-p').textContent = 'Interesert?';
    document.querySelector('#mail-a').textContent = 'Send meg en e-post';
    document.querySelector('#cv-a').textContent = 'Se på CV-en min';
    document.querySelector('#popupBtn').textContent = 'Se på studien min';
}
function changeLanguageEspanol() {
    // home box
    document.getElementById('personal-description').textContent = `
    ¡Hola! Mi nombre es Wessel y soy un chico holandés de ${calculateAge()} años. 
    Me gusta pasear por el bosque con mi perro, ir al gimnasio y diseñar y crear aplicaciones web.
    `;

    // tech
    document.getElementById('tech-stack').textContent = "Una colección de tecnologías que he utilizado a lo largo de mis proyectos💡";

    // projects
    document.getElementById('projects-h2-text').textContent = "PROYECTOS";
    document.getElementById('project-p').textContent = "Cada proyecto es una pieza única de desarrollo🎨";

    document.getElementById('kpn-description').innerHTML = `
                    KPN necesitaba un sitio web para que sus empleados registraran sus kilómetros, debido a que el gobierno holandés pidió a las cooperativas que lo hicieran debido a <a target="_blank" class="skill-a" href="https://www.rvo.nl/onderwerpen/rapportage-wpm">esta ley</a>. 
                    Luego, la aplicación calcula las emisiones de CO2 y las muestra en un panel para que las vean los gerentes. También crea un informe en hoja de Excel que contiene todas las emisiones de CO2 de todos los empleados para que KPN lo entregue.
                    <br>
                    Dirección de correo electrónico: manager1@gmail.com<br>
                    Contraseña: managerPass`;

    document.getElementById('last-text').textContent = "Y muchos más proyectos por venir...";

    // degree
    document.getElementById('popup-bachelor').textContent = "Bachelor • 4 años";

    // footer
    document.querySelector('#footer-p').textContent = '¿Interesado?';
    document.querySelector('#mail-a').textContent = 'Envíame un correo electrónico';
    document.querySelector('#cv-a').textContent = 'Mira mi CV';
    document.querySelector('#popupBtn').textContent = 'Ver mi estudio';
}