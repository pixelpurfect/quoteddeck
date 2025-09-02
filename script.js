const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett"
];

const quoteBox = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const themeBtn = document.getElementById("toggle-theme");

newQuoteBtn.addEventListener("click", () => {
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = `"${quotes[randomIndex]}"`;
    quoteBox.style.opacity = 1;
  }, 300);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

