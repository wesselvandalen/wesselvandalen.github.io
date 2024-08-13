addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.getElementById('footer-rights').innerHTML = `&copy; ${new Date().getFullYear()} Wessel. All rights reserved.`;
        document.getElementById('description').textContent = `A social ${calculateAge()} year old Full Stack Software Developer with a Norwegian touch, eager to learn.`;
        document.getElementById('about').innerHTML = `
            Hei hei!<br> My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands. I'm social, hard-working and serious, but always down for a laugh. 
            <br><br>
            I am a Full Stack Software Engineer specialized in front end. I have a great passion for software development, having studied the bachelor <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT - Software Development</a> at the Hogeschool Utrecht (2022 - 2026).
            <br><br>
            My hobbies are learning Norwegian, working out in the gym, hanging out / gaming with friends, playing chess & going on a hike in the forest with my dog (Rowdy, Golden Retriever).
        `;
    }, 100);
});

function calculateAge() {
    let dob = new Date("01/20/2004");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}