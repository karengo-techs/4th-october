function showMessage() {

    const message = document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        document.querySelector(".card").classList.add("show");
    }, 500);

    createHearts();
}


function revealSurprise() {

    const surprise = document.getElementById("surpriseText");

    surprise.style.display = "block";

    surprise.style.animation = "fadeIn 1s ease";

    createHearts();
}


/* Floating hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}


function createHearts() {

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);

    }

}


/* Keep subtle hearts floating in background */

setInterval(() => {

    if (Math.random() > 0.5) {
        createHeart();
    }

}, 1500);