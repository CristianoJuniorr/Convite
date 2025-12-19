document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector(".hearts");
  const btn = document.getElementById("btnConvite");
  const overlay = document.getElementById("overlay");
  const musica = document.getElementById("musica");
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  // 🌟 redimensiona canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let starArray = [];
  for (let i = 0; i < 200; i++) {
    starArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5
    });
  }

  function desenharEstrelas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    starArray.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
      star.y += 0.3;
      if (star.y > canvas.height) star.y = 0;
    });

    requestAnimationFrame(desenharEstrelas);
  }

  // ❤️ gerar corações
  function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 20 + Math.random() * 20 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(criarCoracao, 400);

  // 💌 clique no botão
  btn.addEventListener("click", () => {
    overlay.style.display = "block";
    musica.volume = 0.4;
    musica.play();
    desenharEstrelas();
  });
});