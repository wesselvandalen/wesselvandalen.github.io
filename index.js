addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('description').textContent = `A social ${calculateAge()} year old Full Stack Software Developer with a Norwegian charm, enthousiastic to discover and create.`;
        document.getElementById('about').innerHTML = `
            Hei hei!<br> My name is Wessel and I'm a ${calculateAge()} year old guy with a Norwegian charm born in the Netherlands. I'm socially engaged, always down to create a good team-spirit and take great joy and pride in the code I write! 
            <br><br>
            I am a Full Stack Software Engineer with a bachelor in <a class="about-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">HBO ICT - Software Development</a> at the Hogeschool Utrecht (2022 - 2026).
            I've specialized myself in Front end & design, where I love to work with React and Typescript. But besides my specialization, I've also worked a ton with Back end related projects like Java Spring applications and PostgreSQL databases.
            <br><br>
            My hobbies are learning Norwegian, working out in the gym, hanging out / gaming with friends, playing chess & going on a hike in the forest with my dog (Rowdy, Golden Retriever). 
        `;
    }, 100);
});

const calculateAge = () => {
    let dob = new Date("01/20/2004");
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
}