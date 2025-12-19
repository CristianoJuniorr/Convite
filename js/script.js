document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelector(".hearts");
  const btn = document.getElementById("btnConvite");
  const overlay = document.getElementById("overlay");
  const musica = document.getElementById("musica");

  // ❤️ CORAÇÕES
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);

  // 🌌 ESTRELAS
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5
  }));

  function estrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      s.y += 0.3;
      if (s.y > canvas.height) s.y = 0;
    });

    requestAnimationFrame(estrelas);
  }

  // 💌 BOTÃO
  btn.addEventListener("click", () => {
    overlay.style.display = "block";
    musica.volume = 0.4;
    musica.play();
    estrelas();
  });
});