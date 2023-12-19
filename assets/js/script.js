/* jshint esversion: 6 */

/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const continueBtn = document.querySelector(".buttons .continuebtn");
const quizContainer = document.querySelector(".quiz-game-container");
const OptionsList = document.querySelector(".answers-options-list");
const timeCounter = quizContainer.querySelector(".timer .timer-sec");
import questions from './questions.js';


/* Show Info section if is pressed. Added eventlistner.Listen to if button is clicked*/
startButton.addEventListener('click', () => {
    infoContainer.classList.add('activeInfo'); /*Show info section */
});

/* Show Quiz section if pressed. Added eventlistner.Listen to if button is clicked */
continueBtn.addEventListener('click', () => {
    infoContainer.classList.remove('activeInfo'); /*Hide info section */
    quizContainer.classList.add('activeQuiz'); /* Show quiz section */
    getQuestions(0);
    questionCounter(1);
    startTimer(10);
});

let questionCount = 0;
let questionNumb = 1;
let timeCount;
let timeValue = 10;
let userScore = 0;

const nextButton = quizContainer.querySelector(".next-button");
const resultContainer = document.querySelector(".result-container");
const restartQuiz = resultContainer.querySelector(".btn .play-again-btn");

/* Restart the quiz when pressed. Added eventlistener */
restartQuiz.addEventListener('click', () => {
    quizContainer.classList.add("activeQuiz"); /* Show the quiz section again */
    resultContainer.classList.remove("activeResult"); /* Hide the result section*/
    let questionCount = 0;
    let questionNumb = 1;
    let timeValue = 10;
    getQuestions(questionCount);
    questionCounter(questionNumb);
    clearInterval(timeCount);
    startTimer(timeValue);
    nextButton.style.display = "none";
});

/* If next button is pressed. Added eventlistener */
nextButton.addEventListener('click', () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        questionNumb++;
        getQuestions(questionCount);
        questionCounter(questionNumb);
        clearInterval(timeCount);
        startTimer(timeValue);
        nextButton.style.display = "none";
    }
    else {
        console.log("Questions Completed!");
        questionCount = 0;
        questionNumb = 1;
        showResultContainer();
    }
});

/* Getting questions and options from array ( questions.js ) */
function getQuestions(index) {
    const questionText = document.querySelector(".question-text");
    let questionName = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
    let OptionsText = `
    <div class="answers">${questions[index].options[0]}<span></span></div>
    <div class="answers">${questions[index].options[1]}<span></span></div>
    <div class="answers">${questions[index].options[2]}<span></span></div>
    <div class="answers">${questions[index].options[3]}<span></span></div>
 `;
    questionText.innerHTML = questionName;
    OptionsList.innerHTML = OptionsText;
    const answers = OptionsList.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function () {
            answersSelected(this);
        });
    }
}

let checkIcon = '<div class="icon check"><i class="fa-solid fa-check-double"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';

/* This function updated the score and shows the answer in color */
function answersSelected(answer) {
    clearInterval(timeCount);
    let UserAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = OptionsList.children.length;
    if (UserAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", checkIcon);
    }
    else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        /* If incorred answer is pressed show the right answer */
        for (let i = 0; i < allOptions; i++) {
            if (OptionsList.children[i].textContent == correctAnswer) {
                OptionsList.children[i].setAttribute("class", "answers correct");
                OptionsList.children[i].insertAdjacentHTML("beforeend", checkIcon);
            }
        }
    }
    /* Disabel all options if user pressed an answer */
    for (let i = 0; i < allOptions; i++) {
        OptionsList.children[i].classList.add("disabled");
    }
    nextButton.style.display = "block";
}

/* Show the result section */
function showResultContainer() {
    infoContainer.classList.remove("activeInfo"); /* Hide the info Container */
    quizContainer.classList.remove("activeQuiz"); /* Hide the quiz Container */
    resultContainer.classList.add("activeResult");/* Show the result Container */
    const scoreText = resultContainer.querySelector(".score");
    if (userScore < 4) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>. Is that all you got?</span>';
        scoreText.innerHTML = scoreT;
    }
    else if (userScore >= 4 && userScore <= 6) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>. You can do better!</span>';
        scoreText.innerHTML = scoreT;
    }
    else if (userScore >= 7) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>. That is more like it!</span>';
        scoreText.innerHTML = scoreT;
    }
}

/* Start a timer and disabels if answer is pressed */
function startTimer(time) {
    timeCount = setInterval(timer, 1000);
    function timer() {
        timeCounter.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(timeCount);

            let correctAnswer = questions[questionCount].answer;
            let allOptions = OptionsList.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (OptionsList.children[i].textContent == correctAnswer) {
                    OptionsList.children[i].setAttribute("class", "answers correct");
                    OptionsList.children[i].insertAdjacentHTML("beforeend", checkIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                OptionsList.children[i].classList.add("disabled");
            }
            nextButton.style.display = "block";
        }
    }
}

/* Shows with question you are on and how many there are*/
function questionCounter(index) {
    const bottomCounter = quizContainer.querySelector(".total-questions");
    let totalQuestionText = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomCounter.innerHTML = totalQuestionText;
}
