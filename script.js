
function countdown() {
    const targetDate = new Date("May 24, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = days + " days to go!";
}

setInterval(countdown, 1000);
countdown();
