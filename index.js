let slideIndex = 1;

addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        renderText();
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

function renderText() {
    document.querySelector('#copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`; // https://www.termsfeed.com/blog/sample-copyright-notices/
    document.getElementById('about-description').innerHTML = `Heisann! <a class="special-text" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Noors voor hallo</a><br><br>
                            Mijn naam is Wessel en ik ben een ${calculateAge()} jaar oude gast geboren in Houten, Nederland.
                            Ik heb een grootte passie voor webdevelopment en server applicaties door wat ik geleerd heb op mijn studie <a class="extern-link" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> op de <a class="extern-link" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            Qua hobbies ga ik graag op pad met mijn hond Rowdy (Golden Retriever), game ik met vrienden en leer ik Noors (taal, cultuur, etc.). 
                            <br><br>
                            Neem gerust een kijkje tussen mijn foto's om een beter beeld van me te krijgen!`;
}