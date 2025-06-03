//declaring phrases
const phrases = [
    "Aspiring Electronics Engineer",
    "Tech Enthusiast",
    "Math and Physics Lover",
    "MUN delegate",
    "PC Builder",
    "Water Polo Player"
];

let index = 0;
//retrieving the thingamabob
const phrasern = document.getElementById("ambitionanimate");

//making the function
function rotatePhrase() {

    phrasern.style.opacity = 0;
    //algo to loop and then reincrease the capacity
    setTimeout(() => {
        index = (index + 1) % phrases.length;
        phrasern.textContent = phrases[index];

        phrasern.style.opacity = 1;
    }, 400);
}
//waiting time for a phrase
setInterval(rotatePhrase, 2000);
