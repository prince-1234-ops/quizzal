// ==============================
// Typing Animation
// ==============================

const words = [
    "Create Amazing Quizzes",
    "Learn Anytime",
    "Challenge Your Friends",
    "Test Your Knowledge",
    "Become a Quiz Master"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && letterIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Image Slider
// ==============================

const images = [
    
    "images/OIP 9.jpg",
    "images/OIP 8.jpg",
    "images/OIP 10.jpg",
    "images/pij.png",
     "images/pic4.jpg",
];

let currentImage = 0;

const slider = document.getElementById("slider");

if (slider) {

    setInterval(() => {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        slider.style.opacity = "0";

        setTimeout(() => {
            slider.src = images[currentImage];
            slider.style.opacity = "1";
        }, 300);

    }, 3000);
}


// ==============================
// Particles Background
// ==============================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80
            },

            color: {
                value: "#00eaff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00eaff",
                opacity: 0.4,
                width: 1
            },

            move: {
                enable: true,
                speed: 2
            }

        }

    });

}
