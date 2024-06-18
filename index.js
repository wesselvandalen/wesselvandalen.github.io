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
    document.getElementById('about-description').innerHTML = `Hello! My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands.
                            I have a great passion for both webdevelopment and server applications
                            having studied <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> at the <a class="about-a" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>.
                            <br><br>
                            My favorite country in the world is Norway, and I would love to live
                            there someday. Because of that, I have learned to speak fluent Norwegian
                            and learn a lot about the culture and country itself.
                            <br><br>
                            I also love bodybuilding, having trained for more than 3 years. Furthermore
                            do I love to go out in the woods with my dog, game with friends & cook meals.
                            <br><br>
                            Fun fact: my highest Duolingo streak was around ~580 days!`;
}