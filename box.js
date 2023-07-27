const box = document.getElementsByClassName("containBox");

let track = [];
Array.from(box).forEach((e) => {
    e.addEventListener("click", () => {
        if (track.length > 0) {
            document.getElementById(track[0]).classList.remove("boxactive");
        }
        e.classList.toggle("boxactive");
        track[0] = e.id;
    })
})