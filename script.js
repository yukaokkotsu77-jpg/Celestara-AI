// 🌌 STARFIELD ENGINE
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 220; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6,
    s: Math.random() * 0.7 + 0.1,
    o: Math.random()
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${s.o})`;
    ctx.fill();

    s.y += s.s;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();

// 🚀 INTRO TIMELINE (CINEMATIC SYNC)
window.onload = () => {

  setTimeout(() => {
    document.getElementById("intro").style.transition = "opacity 2s";
    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("app").style.display = "block";
    }, 2000);

  }, 6500);
};

// 💬 CHAT ENGINE
function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value;
  if (!text) return;

  add(text,"user");
  input.value = "";

  setTimeout(() => {
    add("Celestara analyzing cosmic pattern: " + text, "ai");
  }, 900);
}

function add(text,type){
  let box = document.getElementById("chat-box");

  let div = document.createElement("div");
  div.className = "message " + type;
  div.innerText = text;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
