/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const levelsContainer = document.querySelector(".levels-container")
const quizContainer = document.querySelector(".quiz-game-container");
const playAgainbutton = document.querySelector(".btn .play-again-btn");
const scoreSection = document.querySelector("score-section");


/* Show Level section if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); /* Show level section if pressed */
}

