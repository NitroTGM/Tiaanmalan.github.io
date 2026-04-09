const revealBtn = document.getElementById("revealBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

let count = localStorage.getItem("missCount") || 0;
countDisplay.textContent = count;

// Reveal message
revealBtn.addEventListener("click", () => {
    hiddenMessage.classList.toggle("hidden");
});

// Count button
countBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
    localStorage.setItem("missCount", count);
});
