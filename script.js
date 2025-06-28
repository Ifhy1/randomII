const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const prizes = ["💰 Money", "🚗 Car", "🏠 House", "🎁 Surprise", "📱 Phone", "💼 Job"];
let isSpinning = false;

spinBtn.addEventListener("click", () => {
  if (isSpinning) return;

  isSpinning = true;
  result.textContent = "";

  const randomIndex = Math.floor(Math.random() * prizes.length);
  const fullRotations = 5;
  const sliceAngle = 360 / prizes.length;
  const rotation = fullRotations * 360 + randomIndex * sliceAngle + sliceAngle / 2;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    result.textContent = `🎉 You got: ${prizes[randomIndex]}!`;
    isSpinning = false;
  }, 5200);
});
