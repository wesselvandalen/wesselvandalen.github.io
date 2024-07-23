addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        renderText();
    }, 100);
});

function calculateAge() {
    let dob = new Date("01/20/2004");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}

function renderText() {
    document.getElementById('about-description').innerHTML =
        `Heisann! <a class="ex-link" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Noors voor hallo</a><br><br>
        Mijn naam is Wessel, ik ben ${calculateAge()} jaar oud en ik ben geboren in Houten, Nederland.
        Ik heb <a class="ex-link" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> gestudeerd op de <a class="ex-link" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>
        om een Full Stack Software Developer te worden gespecialiseerd in back-end.
        <br><br>
        Ik ga graag naar het bos met mijn hond Rowdy (Golden Retriever), vind het leuk om te schaken, train graag een paar keer per week in de sportschool, game regelmatig met vrienden en houdt erg veel van Noors (taal, cultuur, etc.). 
       `;
}