let quotes = [
    ["Exterminate", "Dalek"],
    ["Allons-y!", "Tenth Doctor"],
    ["Run!", "Ninth Doctor"],
    ["Bow ties are cool", "Eleventh Doctor"],
    ["I always wanted to be ginger", "Tenth Doctor"],
    ["Would you like a jelly baby?", "Fourth Doctor"],
];

let randomNumber = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[randomNumber];

const quoteTextElement = document.getElementById("quote-text");
const quoteSpeakerElement = document.getElementById("quote-speaker");

quoteTextElement.innerText = randomQuote[0];
quoteSpeakerElement.innerText = randomQuote[1];