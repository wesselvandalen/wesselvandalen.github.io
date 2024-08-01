addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.getElementById('footer-rights').innerHTML = `&copy; ${new Date().getFullYear()} Wessel. All rights reserved.`;
        document.getElementById('description').textContent = `I'm a ${calculateAge()} year old Full Stack Software Developer with a Norwegian touch.`;
        document.getElementById('about').innerHTML = `
            Hei hei! My name is Wessel and I'm a ${calculateAge()} year old guy from the Netherlands. 
            <br><br>
            My hobbies are learning Norwegian, work out in the gym, hangout / play games with friends, 
            play chess & go on a hike in the forest with my dog (Rowdy, Golden Retriever).
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