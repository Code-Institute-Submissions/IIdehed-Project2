/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container");
const startButton = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-game-container");
const scoreSection = document.querySelector("score-section");


/* Show Game Quiz if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activnow");
}


