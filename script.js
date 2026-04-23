/* 🎵 SONGS */
const songs = [
    {name:"❤️ Our Song", file:"song.mp3"},
    {name:"🌙 Late Nights", file:"song2.mp3"},
    {name:"✨ Third Song", file:"song3.mp3"},
    {name:"💫 Fourth Song", file:"song4.mp3"},
    {name:"🎶 Fifth Song", file:"song5.mp3"}
];

const audio = document.getElementById("bg-music");
const controls = document.querySelector(".song-controls");
const songName = document.getElementById("song-name");

/* 🎧 BUTTONS */
songs.forEach((song,index)=>{
    const btn = document.createElement("button");
    btn.className = "song-btn";
    btn.textContent = song.name;

    if(index===0) btn.classList.add("active");

    btn.onclick = ()=>{
        audio.src = song.file;
        audio.play();

        document.querySelectorAll(".song-btn")
            .forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");
        songName.textContent = "Playing: " + song.name;
    };

    controls.appendChild(btn);
});

audio.src = songs[0].file;

/* 💖 HEART SYSTEM */
const heart = document.getElementById("heart");
const message = document.getElementById("message");

const messages = [
    "I miss you 💕",
    "Forever us 💖",
    "You're my favorite 🥺",
    "Come back soon ❤️"
];

heart.onclick = () => {

    const random = Math.floor(Math.random()*messages.length);
    message.textContent = messages[random];

    /* 💥 THUMP */
    heart.style.transform = "rotate(-45deg) scale(1.4)";
    setTimeout(()=>{
        heart.style.transform = "rotate(-45deg) scale(1)";
    },180);

    /* 💕 BURST */
    const rect = heart.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;

    for(let i=0;i<14;i++){
        const h = document.createElement("div");
        h.className = "mini-heart";
        document.body.appendChild(h);

        h.style.left = cx + "px";
        h.style.top = cy + "px";

        const angle = Math.random()*Math.PI*2;
        const dist = 80 + Math.random()*70;

        const x = Math.cos(angle)*dist;
        const y = Math.sin(angle)*dist;

        h.animate([
            {transform:"translate(0,0) scale(1)", opacity:1},
            {transform:`translate(${x}px,${y}px) scale(0.5)`, opacity:0}
        ],{duration:900});

        setTimeout(()=>h.remove(),900);
    }
};

/* 🌌 PARALLAX */
let tx=0,ty=0,cx=0,cy=0;

document.addEventListener("mousemove",(e)=>{
    tx=(e.clientX/window.innerWidth-0.5)*30;
    ty=(e.clientY/window.innerHeight-0.5)*30;
});

function animate(){
    cx+=(tx-cx)*0.05;
    cy+=(ty-cy)*0.05;

    document.querySelector(".bg-back").style.transform =
        `scale(1.1) translate(${cx}px,${cy}px)`;

    requestAnimationFrame(animate);
}
animate();

/* 💫 SPARKLES + PETALS */
document.addEventListener("mousemove",(e)=>{
    if(Math.random()>0.85) return;

    const el=document.createElement("div");
    el.className=Math.random()>0.5?"sparkle":"petal";

    el.style.left=e.clientX+"px";
    el.style.top=e.clientY+"px";

    document.body.appendChild(el);

    el.animate([
        {opacity:1,transform:"translateY(0)"},
        {opacity:0,transform:"translateY(40px)"}
    ],{duration:800});

    setTimeout(()=>el.remove(),800);
});

/* ⏳ COUNTDOWN */
const countdownEl = document.getElementById("countdown");

/* 👉 CHANGE THIS DATE */
const targetDate = new Date("2026-09-01 00:00:00").getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const diff = targetDate - now;

    if(diff <= 0){
        countdownEl.textContent = "We're together ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();