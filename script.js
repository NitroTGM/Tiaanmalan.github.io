// 🌙 DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// 💬 CYCLING LOVE NOTES
const notes = [
    "I love you more than yesterday ❤️",
    "You’re my favorite person ever 🥺",
    "I can’t wait to see you again 💕",
    "You make everything better ✨",
    "Missing you extra today 😭",
    "Alles sal okay wees 💕",
    "Jy is net myne, vir ewig en altyd😍🤭"
];

let currentIndex = 0;

const heartBtn = document.getElementById("heartBtn");
const loveNote = document.getElementById("loveNote");

heartBtn.addEventListener("click", () => {
    loveNote.textContent = notes[currentIndex];

    currentIndex++;
    if (currentIndex >= notes.length) {
        currentIndex = 0; // loop back to start
    }
});


// 🕒 COUNTDOWN
const targetDate = new Date("2026-08-30").getTime(); // CHANGE THIS

const timer = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        timer.textContent = "We're together ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    timer.textContent = `${days}d`;
}, 1000);


// 🎵 MUSIC AUTOPLAY FIX (for browsers that block it)
window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
});
