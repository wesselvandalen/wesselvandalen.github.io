let slideIndex = 1;

addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        prepareLanguages();
        translateEnglish();
        showDivs(slideIndex);
    }, 100);
});

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
    let dob = new Date("01/20/2004");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}

function prepareLanguages() {
    const nlKnop = document.querySelector('#nlknop');
    const enknop = document.querySelector('#enknop');
    const noknop = document.querySelector('#noknop');

    nlKnop.addEventListener('click', (ev) => {
        changeLanguage('nl');
    });

    enknop.addEventListener('click', (ev) => {
        changeLanguage('en');
    });

    noknop.addEventListener('click', (ev) => {
        changeLanguage('no');
    });
}

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    const NLLI = document.getElementById('nlli');
    const NOLI = document.getElementById('noli');
    const ENLI = document.getElementById('enli');

    if (lang === 'nl') {
        NLLI.classList.add('active');
        NOLI.classList.remove('active');
        ENLI.classList.remove('active');
        translateDutch();
    } else if (lang === 'no') {
        NLLI.classList.remove('active');
        NOLI.classList.add('active');
        ENLI.classList.remove('active');
        translateNorwegian()
    } else {
        NLLI.classList.remove('active');
        NOLI.classList.remove('active');
        ENLI.classList.add('active');
        translateEnglish();
    }
}

function translateEnglish() {
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.querySelector('#home-text-top').textContent = `HI THERE! I'M`;
    document.querySelector('#home-text-description').textContent = `A Full Stack Software Developer specialized in Front-end`;
    document.querySelector('#resume-a').innerHTML = `Check my resume<img class="resume-ref" src="photos/icons/ref-icon.png" alt="Pointing arrow">`;

    document.querySelector('#about-h2-text').textContent = `ABOUT ME`;
    document.getElementById('about-description').innerHTML = `Heisann! <a class="special-text" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Norwegian for hello</a><br><br>
                            My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.
                            I have a great passion for both webdevelopment and server applications
                            having studied <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> at the <a class="about-a" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            In my freetime I love to learn Norwegian. Norway is my favorite country in the world and I travel there a lot. I love to learn about the culture, customs, dialects etc. My longest Norwegian Duolingo streak was 674 days in a row!
                            <br><br>
                            To get a better impression of me, just take a look between my pictures!`;

    document.querySelector('#projects-label').textContent = `PROJECTS`;
}

function translateNorwegian() {
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.querySelector('#home-text-top').textContent = `HEI HEI! JEG ER`;
    document.querySelector('#home-text-description').textContent = `En Full Stack Software Developer spesialisert i Front-end`;
    document.querySelector('#resume-a').innerHTML = `Sjekk ut CV-en min<img class="resume-ref" src="photos/icons/ref-icon.png" alt="Pointing arrow">`;

    document.querySelector('#about-h2-text').textContent = `OM MEG`;
    document.getElementById('about-description').innerHTML = `Heisann!<br><br>
                            jeg heter Wessel og jeg er en ${calculateAge()} år gammel fyr fra Nederland.
                            I have a great passion for both webdevelopment and server applications
                            having studied <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> at the <a class="about-a" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            In my freetime I love to learn Norwegian. Norway is my favorite country in the world and I travel there a lot. I love to learn about the culture, customs, dialects etc. My longest Norwegian Duolingo streak was 674 days in a row!
                            <br><br>
                            To get a better impression of me, just take a look between my pictures!`;

    document.querySelector('#projects-label').textContent = `PROSJEKT`;
}

function translateDutch() {
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.querySelector('#home-text-top').textContent = `HEY! IK BEN`;
    document.querySelector('#home-text-description').textContent = `Een Full Stack Software Developer gespecialisseerd in Front-end`;
    document.querySelector('#resume-a').innerHTML = `Bekijk mijn CV<img class="resume-ref" src="photos/icons/ref-icon.png" alt="Pointing arrow">`;

    document.querySelector('#about-h2-text').textContent = `OVER MIJ`;
    document.getElementById('about-description').innerHTML = `Heisann! <a class="special-text" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Noors voor hallo</a><br><br>
                            Mijn naam is Wessel en ik ben een gast van ${calculateAge()} jaar uit Nederland.
                            I have a great passion for both webdevelopment and server applications
                            having studied <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> at the <a class="about-a" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            In my freetime I love to learn Norwegian. Norway is my favorite country in the world and I travel there a lot. I love to learn about the culture, customs, dialects etc. My longest Norwegian Duolingo streak was 674 days in a row!
                            <br><br>
                            To get a better impression of me, just take a look between my pictures!`;

    document.querySelector('#projects-label').textContent = `PROJECTEN`;
}