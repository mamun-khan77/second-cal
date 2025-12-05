// Color Changer code (আগের মতো)
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F",
  "#8E44AD", "#1ABC9C", "#E74C3C", "#2980B9",
  "#27AE60", "#F39C12", "#9B59B6", "#16A085"
];

const colorBtn = document.getElementById("colorBtn");
const colorName = document.getElementById("colorName");

colorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  colorName.textContent = `Current Color: ${randomColor}`;
});

// Google button click এ Google এ নিয়ে যাওয়া
const googleBtn = document.getElementById("googleBtn");
googleBtn.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");  // নতুন tab এ খুলবে :contentReference[oaicite:0]{index=0}
});

// Calculator button (আগের মতো)
const calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", () => {
  window.location.href = "calculator.html";
});
