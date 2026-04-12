// ELEMENTS
const heartBtn = document.getElementById("heartBtn");
const loveNote = document.getElementById("loveNote");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

// 💬 MESSAGES
const notes = [
    "I love you ❤️",
    "You’re my favorite person 🥺",
    "I miss you 💕",
    "Forever us 💞"
];

const secretMessage = "If you found this… I love you more than words can explain ❤️";

let i = 0;
let tapCount = 0;
let tapTimer;

// ❤️ HEART
heartBtn.addEventListener("click", () => {
    loveNote.textContent = notes[i];
    i = (i + 1) % notes.length;

    tapCount++;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => tapCount = 0, 1500);

    if (tapCount >= 5) {
        loveNote.textContent = secretMessage;
        tapCount = 0;
    }

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
const songs = [
    { file: "song.mp3", name: "Our Song ❤️" },
    { file: "song2.mp3", name: "Another Memory 💕" }
];

let currentSong = 0;
const songName = document.getElementById("songName");
const nextBtn = document.getElementById("nextSongBtn");

function playSong(index) {
    music.src = songs[index].file;
    songName.textContent = "Playing: " + songs[index].name;
    music.play().catch(() => {});
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    playSong(currentSong);
}

nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);

playSong(currentSong);

document.addEventListener("click", () => {
    music.play();
});

// 🎬 VIDEO
const videos = document.querySelectorAll(".videoPlayer");

videos.forEach(v => {
    v.addEventListener("play", () => music.volume = 0.3);
    v.addEventListener("pause", () => music.volume = 1);
});
