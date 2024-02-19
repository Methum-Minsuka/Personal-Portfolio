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

let changeText = (index) => {
    let currentwor = words[currentwordIndex];
    let nextword = currentwordIndex === maxWordIndex ? words[0] : words[currentwordIndex + 1];

    aarray.from(currentwor.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i*80);
    });

    nextword.style.opacity=1;
    Array.from(nextword.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80)
    })
    currentwordIndex = currentwordIndex === maxWordIndex  ? 0 : currentwordIndex+1;
};

changeText()
setInterval(changeText,3000)