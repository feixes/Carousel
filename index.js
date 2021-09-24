const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const movieTitle = document.getElementById("movie-title");
const slideCount = document.getElementById("slide-count");
const movieTitles = ["The Joker", "Baby Driver", "Parasite"];

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlideClicked);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

movieTitle.textContent = movieTitles[0];
slideCount.textContent = `${slidePosition + 1}/${slides.length}`;

let interval = setInterval(moveToNextSlide, 3000);

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
  movieTitle.textContent = movieTitles[slidePosition];
  slideCount.textContent = `${slidePosition + 1}/${slides.length}`;
  document.getElementById("overlay").style.display = "none";
}

function moveToNextSlideClicked() {
  hideAllSlides();
  clearInterval(interval);
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
  movieTitle.textContent = movieTitles[slidePosition];
  slideCount.textContent = `${slidePosition + 1}/${slides.length}`;
  document.getElementById("overlay").style.display = "none";
}

function moveToPrevSlide() {
  hideAllSlides();
  clearInterval(interval);
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
  movieTitle.textContent = movieTitles[slidePosition];
  slideCount.textContent = `${slidePosition + 1}/${slides.length}`;
  document.getElementById("overlay").style.display = "none";
}

movieTitle.addEventListener("click", function () {
  clearInterval(interval);
  if (document.getElementById("overlay").style.display === "block") {
    document.getElementById("overlay").style.display = "none";
  } else {
    document.getElementById("overlay").style.display = "block";
  }
});
