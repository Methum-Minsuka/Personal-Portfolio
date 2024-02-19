let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        word.append(span);
    });
});

let currentwordIndex = 0;
let maxWordIndex = words.length - 1;

words[currentwordIndex].style.opacity = "1";

let changeText = () => {
    let currentword = words[currentwordIndex];

    currentword.style.opacity = "0";

    currentwordIndex++;

    if (currentwordIndex > maxWordIndex) {
        currentwordIndex = 0;
    }

    words[currentwordIndex].style.opacity = "1";
};

setInterval(changeText, 2000);