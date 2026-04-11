// 🎯 SAFE ELEMENT GETTERS
const heartBtn = document.getElementById("heartBtn");
const loveNote = document.getElementById("loveNote");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

// 💬 LOVE NOTES
const notes = [
    "I love you more than yesterday ❤️",
    "You’re my favorite person ever 🥺",
    "I can’t wait to see you again 💕",
    "You make everything better ✨",
    "Missing you extra today 😭",
    "Alles sal okay wees 💕",
    "Jy is net myne, vir ewig en altyd 😍🤭"
];

let currentIndex = 0;

// ❤️ HEART CLICK (SAFE)
if (heartBtn && loveNote) {
    heartBtn.addEventListener("click", () => {
        loveNote.textContent = notes[currentIndex];
        currentIndex = (currentIndex + 1) % notes.length;

        const container = document.querySelector(".heart-container");

        for (let i = 0; i < 6; i++) {
            const heart = document.createElement("div");
            heart.classList.add("floating-heart");

            heart.style.left = "50%";
            heart.style.top = "50%";

            const x = (Math.random() - 0.5) * 80;
            const y = Math.random() * -80;

            heart.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(45deg)`;

            container.appendChild(heart);

            setTimeout(() => heart.remove(), 1500);
        }
    });
}

// 🕒 COUNTDOWN
if (timer) {
    const targetDate = new Date("2026-08-30").getTime();

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
}

// 🎵 MUSIC FIX (important)
if (music) {
    // Try autoplay
    music.play().catch(() => {
        console.log("Autoplay blocked — waiting for user interaction");
    });

    // Force play on ANY click
    document.addEventListener("click", () => {
        music.play();
    });
}
