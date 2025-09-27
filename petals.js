// snow.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("snowfall");
  const snowCount = 20; // 想要幾片雪花

  for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement("snowflake");
    const img = document.createElement("img");
    img.src = "images/petal.png"; // 你的圖片路徑
    const opacity = 0.4 + Math.random() * 0.4; // 0.4~0.8之間
    img.style.opacity = opacity;

    img.alt = "images/petal.png";
    flake.appendChild(img);

    // 1️⃣ 隨機 left：0% ~ 100% 視窗寬度
    const left = Math.random() * 100;
    flake.style.left = `${left}vw`;

    // 2️⃣ 隨機動畫延遲：0 ~ 10 秒
    const delay = Math.random() * 10;
    flake.style.animationDelay = `${delay}s`;

    // 3️⃣ 隨機動畫時間：5 ~ 15 秒
    const duration = 5 + Math.random() * 10;
    flake.style.animationDuration = `${duration}s`;

    container.appendChild(flake);
  }
});
