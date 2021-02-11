const input = document.querySelector('.text input');
const output = document.querySelector('.text .output');
const monospaceBtn = document.querySelector('.buttons .monospace');
const cursiveBtn = document.querySelector('.buttons .cursive');
const sansSerifBtn = document.querySelector('.buttons .sans-serif');
const serifBtn = document.querySelector('.buttons .serif');

function updateOutput() {
    output.textContent = input.value;
}

function makeMonospace() {
    if (output.textContent == "") return;
    output.style.fontFamily = "monospace";
}

function makeCursive() {
    if (output.textContent == "") return;
    output.style.fontFamily = "cursive";
}

function makeSansSerif() {
    if (output.textContent == "") return;
    output.style.fontFamily = "sans-serif";
}

function makeSerif() {
    if (output.textContent == "") return;
    output.style.fontFamily = "serif";
}

input.addEventListener("input", updateOutput);
monospaceBtn.addEventListener("click", makeMonospace);
cursiveBtn.addEventListener("click", makeCursive);
sansSerifBtn.addEventListener("click", makeSansSerif);
serifBtn.addEventListener("click", makeSerif);