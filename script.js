
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// 💬 MESSAGES
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

// ❤️ CLICK EVENT
heartBtn.addEventListener("click", () => {
    loveNote.textContent = notes[currentIndex];
    currentIndex = (currentIndex + 1) % notes.length;

    const container = document.querySelector(".heart-container");

    for (let i = 0; i < 6; i++) {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");

        heart.style.left = "50%";
        heart.style.top = "50%";

        // random spread
        const x = (Math.random() - 0.5) * 80;
        const y = Math.random() * -80;

        heart.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(45deg)`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
});

// 🕒 COUNTDOWN
const targetDate = new Date("2026-08-30").getTime();
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

// 🎵 MUSIC AUTOPLAY FIX
window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
});
