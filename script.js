const heartBtn = document.getElementById("heartBtn");
const loveNote = document.getElementById("loveNote");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

const notes = [
    "I love you ❤️",
    "You’re my favorite person 🥺",
    "I miss you 💕",
    "Forever us 💞"
];

let i = 0;

// ❤️ HEART CLICK
heartBtn.addEventListener("click", () => {
    loveNote.textContent = notes[i];
    i = (i + 1) % notes.length;

    const container = document.querySelector(".heart-container");

    for (let x = 0; x < 6; x++) {
        const h = document.createElement("div");
        h.className = "floating-heart";

        h.style.left = "50%";
        h.style.top = "50%";

        container.appendChild(h);
        setTimeout(() => h.remove(), 1500);
    }
});

// 🕒 COUNTDOWN
const target = new Date("2026-08-30").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = Math.floor((target - now) / (1000*60*60*24));
    timer.textContent = d + "d";
}, 1000);

// 🎵 MUSIC
document.addEventListener("click", () => {
    music.play();
});

// 🎬 VIDEO + MUSIC
const videos = document.querySelectorAll(".videoPlayer");

videos.forEach(v => {
    v.addEventListener("play", () => music.volume = 0.3);
    v.addEventListener("pause", () => music.volume = 1);
});
