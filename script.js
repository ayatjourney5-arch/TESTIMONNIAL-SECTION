/* =================================
   TESTIMONIAL SLIDER
================================= */

const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentSlide = 0;
let autoPlay;


/* =================================
   SHOW SLIDE
================================= */

function showSlide(index) {

    // Keep index inside range
    if (index >= cards.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = cards.length - 1;
    } else {
        currentSlide = index;
    }


    // Remove active class
    cards.forEach((card) => {
        card.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    // Add active class
    cards[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


/* =================================
   NEXT SLIDE
================================= */

function nextSlide() {
    showSlide(currentSlide + 1);
}


/* =================================
   PREVIOUS SLIDE
================================= */

function previousSlide() {
    showSlide(currentSlide - 1);
}


/* =================================
   BUTTON EVENTS
================================= */

nextButton.addEventListener("click", () => {

    nextSlide();

    resetAutoPlay();

});


previousButton.addEventListener("click", () => {

    previousSlide();

    resetAutoPlay();

});


/* =================================
   DOT EVENTS
================================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetAutoPlay();

    });

});


/* =================================
   AUTOPLAY
================================= */

function startAutoPlay() {

    autoPlay = setInterval(() => {

        nextSlide();

    }, 5000);

}


function resetAutoPlay() {

    clearInterval(autoPlay);

    startAutoPlay();

}


/* =================================
   PAUSE ON HOVER
================================= */

const slider = document.querySelector(".testimonial-slider");

slider.addEventListener("mouseenter", () => {

    clearInterval(autoPlay);

});


slider.addEventListener("mouseleave", () => {

    startAutoPlay();

});


/* =================================
   KEYBOARD CONTROLS
================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        nextSlide();

        resetAutoPlay();

    }

    if (event.key === "ArrowLeft") {

        previousSlide();

        resetAutoPlay();

    }

});


/* =================================
   INITIALIZE
================================= */

showSlide(0);

startAutoPlay();
