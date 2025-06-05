//declaring phrases
const phrases = [
    "Aspiring Electronics Engineer",
    "Math and Physics Lover",
    "Water Polo Player",
    "Hardware and Peripheral Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const phrasern = document.getElementById("ambitionanimate");
const typingSpeed = 80;   
const deletingSpeed = 40;     
const pauseAfterTyping = 1200; 
const pauseAfterDeleting = 300; 

function typeLoop() {
    const currentPhrase = phrases[index];
    
    if (isDeleting) {
        charIndex--;
        phrasern.textContent = currentPhrase.substring(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
            setTimeout(typeLoop, pauseAfterDeleting);
            return;
        }
        setTimeout(typeLoop, deletingSpeed);
    } else {
        charIndex++;
        phrasern.textContent = currentPhrase.substring(0, charIndex);
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeLoop, pauseAfterTyping);
            return;
        }
        setTimeout(typeLoop, typingSpeed);
    }
}

typeLoop(); // Start the animation
