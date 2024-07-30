addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.getElementById('footer-rights').innerHTML = `&copy; ${new Date().getFullYear()} Wessel. All rights reserved.`;
    }, 100);
});