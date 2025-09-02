const quotes = [
  "“The best way to get started is to quit talking and begin doing.” – Walt Disney",
  "“Don't let yesterday take up too much of today.” – Will Rogers",
  "“It’s not whether you get knocked down, it’s whether you get up.” – Vince Lombardi",
  "“Success is not in what you have, but who you are.” – Bo Bennett",
  "“Your time is limited, so don’t waste it living someone else’s life.” – Steve Jobs",
  "“Do what you can, with what you have, where you are.” – Theodore Roosevelt",
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const toggleThemeBtn = document.getElementById("toggle-theme");

newQuoteBtn.addEventListener("click", () => {
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    const index = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[index];
    quoteEl.style.opacity = 1;
  }, 300);
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
