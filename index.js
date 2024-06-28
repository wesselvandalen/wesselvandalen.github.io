let slideIndex = 1;

addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        translate();
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

function translate() {
    document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Wessel van Dalen, Some rights reserved.`;
    document.getElementById('about-description').innerHTML = `Heisann! <a class="special-text" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Norwegian for hello</a><br><br>
                            My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.
                            I have a great passion for both webdevelopment and server applications
                            having studied <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> at the <a class="about-a" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            In my freetime I love to learn Norwegian. Norway is my favorite country in the world and I travel there a lot. I love to learn about the culture, customs, dialects etc. My longest Norwegian Duolingo streak was 674 days in a row!
                            <br><br>
                            To get a better impression of me, just take a look between my pictures!`;
}