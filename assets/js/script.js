/* Importing questions from questions.js */
import questions from './questions.js';

/* jshint esversion: 6 */

/* Get all the required elements */
const welcomeMessage = document.querySelector(".start-welcome ");
const infoContainer = document.querySelector(".quiz-info-container ");
const howToPlayButton = document.querySelector(".how-to-play-btn");
const playGameBtn = document.querySelector(".playgamebtn");
const quizContainer = document.querySelector(".quiz-game-container");
const OptionsList = document.querySelector(".answers-options-list");
const timeCounter = quizContainer.querySelector(".timer .timer-sec");
const questionFooter = document.querySelector(".question-footer");
const nextButton = questionFooter.querySelector(".next-button");
const resultContainer = document.querySelector(".result-container");
const restartQuiz = resultContainer.querySelector(".btn .play-again-btn");

/* Create global variabels */
let questionCount = 0;
let questionNumb = 1;
let countdownInterval;
let userScore = 0;
const SECONDS_PER_QUESTION = 10;

/* When the page loads , hide the infosection, quizsection and resultsection */
function loadfirstPage() {
    infoContainer.style.display = "none";
    quizContainer.style.display = "none";
    resultContainer.style.display = "none";
}

loadfirstPage();

/* Show Info section if is pressed. Added eventlistnerListener*/
howToPlayButton.addEventListener('click', () => {
    infoContainer.style.display = 'block'; /*Show info section */
    welcomeMessage.style.display = "none"; /* Hide the welcome message */
});

/* Starts the quiz. Getting questions and setting count to 1 and start the timer */
playGameBtn.addEventListener('click', () => {
    infoContainer.style.display = "none"; /* Hide info section */
    quizContainer.style.display = "block"; /* Show quiz section */
    getQuestions(0);
    questionCounter(1);
    startTimer(SECONDS_PER_QUESTION);
});

/* Updates the score, updates which question you are on, resetting the timer 
and getting a new question */
function nextQuestion() {
    questionCount++;
    questionNumb++;
    getQuestions(questionCount);
    questionCounter(questionNumb);
    clearInterval(countdownInterval);
    startTimer(SECONDS_PER_QUESTION);
    nextButton.style.display = "none";
}

/* If next button is pressed. Added eventlistener */
nextButton.addEventListener('click', () => {
    if (questionCount < questions.length - 1) {
        nextQuestion();
    }
    else {
        showResultContainer();
    }
});

/* Getting the question title from questions.js */
function setTitle(index) {
    const questionText = document.querySelector(".question-text");
    const questionName = questions[index].question;
    questionText.innerHTML = questionName;
}

/* Getting the 4 different options from questions.js */
function setOptions(index) {
    const question = questions[index];
    const optionsText = question.options.map(option => `<div class="answers">${option}</div>`).join("\n");
    OptionsList.innerHTML = optionsText;
}

/* Checks which answer the user clicks */
function handelOptionSelection() {
    const answers = OptionsList.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {
            answersSelected(this);
        });
    }
}

/* Getting questions and options from array ( questions.js ) */
function getQuestions(index) {
    setTitle(index);
    setOptions(index);
    handelOptionSelection();
}

let checkIcon = '<div class="icon check"><i class="fa-solid fa-check-double"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';

/* Adding Icon "checkIcon" and the color green */
function addIconAndGreenC(answer) {
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", checkIcon);
}

/* Adding Icon "crossIcon" and the color red */
function addIconAndRedC(answer) {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcon);
}

/* This function updated the score if right answer and shows the answer in colors */
function answersSelected(answer) {
    clearInterval(countdownInterval);
    let UserAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = OptionsList.children.length;
    if (UserAnswer == correctAnswer) {
        userScore += 1;
        addIconAndGreenC(answer);
    }
    else {
        addIconAndRedC(answer);

        /* If incorred answer is pressed show the right answer */
        markCorrectAnswer();
    }
    /* Disabel all options if user pressed an answer */
    for (let i = 0; i < allOptions; i++) {
        OptionsList.children[i].classList.add("disabled");
    }
    nextButton.style.display = "block";
}
/* Resetting the quiz (setting score = 0, getting the 1 question, setting timer = 10 , 
   questioncounter = 0 )*/
function reRunQuiz() {
    userScore = 0;
    questionCount = 0;
    questionNumb = 1;
    const SECONDS_PER_QUESTION = 10;
    getQuestions(questionCount);
    questionCounter(questionNumb);
    clearInterval(countdownInterval);
    startTimer(SECONDS_PER_QUESTION);
    nextButton.style.display = "none";
}

/* Restart the quiz when pressed. Added eventlistener */
restartQuiz.addEventListener('click', () => {
    resultContainer.style.display = "none"; /* Hide the result section*/
    quizContainer.style.display = "block"; /* Show the quiz section again */

    reRunQuiz();
});

/* Show the result section */
function showResultContainer() {
    quizContainer.style.display = "none"; /* Hide the quiz Container */
    resultContainer.style.display = "block";/* Show the result Container */
    const scoreText = resultContainer.querySelector(".score");
    if (userScore < 4) {
        scoreText.innerHTML = `You scored ${userScore} out of ${questions.length}! Is that all you got?`;
    }
    else if (userScore >= 4 && userScore <= 6) {
        scoreText.innerHTML = `You scored ${userScore} out of ${questions.length}! You can do better!`;
    }
    else if (userScore >= 7) {
        scoreText.innerHTML = `You scored ${userScore} out of ${questions.length}! That is more like it!`;
    }
}

/* Start a timer and disabels if answer is pressed */
function startTimer(secondsRemaining) {
    countdownInterval = setInterval(() => {
        updateTimerDisplay(secondsRemaining);
        if (secondsRemaining <= 0) {
            handleTimeOut();
        }
        else {
            secondsRemaining--;
        }
    }, 1000);
}
 /* Updates the timer to 10 seconds */
function updateTimerDisplay(secondsRemaining) {
    timeCounter.textContent = secondsRemaining;
}

function handleTimeOut() {
    clearInterval(countdownInterval);
    markCorrectAnswer();
    disableAllOptions();
    showNextButton();
}

/* Show the right answer */
function markCorrectAnswer() {
    const correctAnswer = questions[questionCount].answer;
    const allOptions = OptionsList.children.length;
    for (let i = 0; i < allOptions; i++) {
        if (OptionsList.children[i].textContent === correctAnswer) {
            OptionsList.children[i].setAttribute("class", "answers correct");
            OptionsList.children[i].insertAdjacentHTML("beforeend", checkIcon);
        }
    }
}
/* Disabel all the options when an answer is pressed */
function disableAllOptions() {
    const allOptions = OptionsList.children.length;
    for (let i = 0; i < allOptions; i++) {
        OptionsList.children[i].classList.add("disabled");
    }
}

/* Show the nextbutton */
function showNextButton() {
    nextButton.style.display = "block";
}

/* Shows with question you are on and how many there are*/
function questionCounter(index) {
    const bottomCounter = questionFooter.querySelector(".total-questions");
    let totalQuestionText = `Question ${index} of ${questions.length}`;
    bottomCounter.innerHTML = totalQuestionText;
}