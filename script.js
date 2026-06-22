const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});


// ⌨️ typing effect
const text = "Indie Game & Web Developer";
let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

type();


// 📊 skills animation
window.addEventListener("load", () => {
  document.querySelectorAll(".bar div").forEach(bar => {
    const w = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => bar.style.width = w, 300);
  });
});


// 🌌 stars animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#e6e1de";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();

    s.y += 0.3;
    if (s.y > canvas.height) s.y = 0;
  });

  requestAnimationFrame(draw);
}

draw();