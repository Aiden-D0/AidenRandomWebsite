function updateClock() {
    const now = new Date();

    document.getElementsByClassName("clock")[0].textContent = 
    now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

function toggleStart() {
    const menu = document.getElementById("Startmenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}