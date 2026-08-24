function updateClock() {
    const now = new Date();

    document.getElementsByClassName("clock")[0].textContent = 
    now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
