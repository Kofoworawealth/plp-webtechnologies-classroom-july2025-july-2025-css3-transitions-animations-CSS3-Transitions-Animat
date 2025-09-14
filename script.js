// ============================
// Part 2: Functions & Scope
// ============================

// Global variable
let globalMessage = "Hello from Global Scope!";

// Function with parameters and return value
function calculateSum(a, b) {
  return a + b;
}

// Function showing local vs global scope
function showScopeMessage() {
  let localMessage = "Hello from Local Scope!";
  return `${globalMessage} | ${localMessage}`;
}

// Display results in the page
document.getElementById("output").textContent =
  `Sum Example: 5 + 7 = ${calculateSum(5, 7)} | ${showScopeMessage()}`;

// ============================
// Part 3: JS Trigger for CSS Animation
// ============================
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Remove and re-add class to restart animation
  box.classList.remove("animate");
  void box.offsetWidth; // Trigger reflow
  box.classList.add("animate");
});
