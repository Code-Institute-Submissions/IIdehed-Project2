/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const continueBtn = document.querySelector(".buttons .continuebtn")
const quizContainer = document.querySelector(".quiz-game-container");
const playAgainbutton = document.querySelector(".btn .play-again-btn");
const scoreSection = document.querySelector("score-section");




/* Show Level section if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); /* Show level section if pressed */
}


continueBtn.onclick = () => {
    infoContainer.classList.remove("activeInfo"); /* hide the info section */
    quizContainer.classList.add("activeQuiz"); /* Show the quiz section */
    getQuestions();
}

let couestionCount = 0

/* Getting questions and options*/
function getQuestions (){
    const questionText = document.querySelector(".question-text");
    let questionName = "<span>" + questions[0].question +"</span>";
    questionText.innerHTML = questionName;
}
