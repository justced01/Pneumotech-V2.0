var modal = document.getElementById("termsModal");
var btn = document.getElementById("assessment-btn");
var span = document.getElementsByClassName("close")[0];
var decline = document.getElementById("declineBtn");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function () {
    if (event.target == decline) {
        modal.style.display = "none";
    }
}