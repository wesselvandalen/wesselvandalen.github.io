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
        `Heisann! <a class="special-text" target="_blank" href="https://en.wikipedia.org/wiki/Norwegian_language">*Heisann is Noors voor hallo</a><br><br>
        Mijn naam is Wessel, ik ben ${calculateAge()} jaar en ben geboren in Houten, Nederland.
        Ik heb <a class="special-text" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT</a> gestudeerd op de <a class="special-text" href="https://www.hu.nl/" target="_blank">Hogeschool Utrecht</a>
        om een Full Stack Software Developer te worden gespecialiseerd in back-end.
        <br><br>
        Ik ga graag naar het bos met mijn hond Rowdy (Golden Retriever), vind het leuk om te schaken, train graag een paar keer per week in de sportschool, game regelmatig met vrienden en houdt erg veel van Noors (taal, cultuur, etc.).
        <br><br>
        Ik ben erg enthousiast als het gaat om IT, ik ben altijd op de hoogte van de laatste nieuwtjes en ik ben erg leergierig. Daarom vind ik het ook leuk om op allerlei verschillende vlakken werkend te zijn, en vind afwisseling
        daarom ook erg fijn in mijn werk. 
       `;
}