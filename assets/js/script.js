/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const continueBtn = document.querySelector(".buttons .continuebtn");
const quizContainer = document.querySelector(".quiz-game-container");
const playAgainbutton = document.querySelector(".btn .play-again-btn");
const scoreSection = document.querySelector("score-section");
const OptionsList = document.querySelector(".answers-options-list");




/* Show Level section if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); /* Show level section if pressed */
};


continueBtn.onclick = () => {
    infoContainer.classList.remove("activeInfo"); /* hide the info section */
    quizContainer.classList.add("activeQuiz"); /* Show the quiz section */
    getQuestions(0);
    questionCounter(1);
};

let questionCount = 0;
let questionNumb = 1;


const nextButton = quizContainer.querySelector(".next-button");

/* If next button is pressed */
nextButton.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        questionNumb++;
        getQuestions(questionCount);
        questionCounter(questionNumb);
    }
    else {
        console.log("Questions Completed!");
    }
};

/* Getting questions and options*/
function getQuestions(index) {
    const questionText = document.querySelector(".question-text");
    let questionName = "<span>" + questions[index].numb + ". " + questions[index].question + "</span>";
    let OptionsText = '<div class="answers">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="answers">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="answers">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="answers">' + questions[index].options[3] + '<span></span></div>';
    questionText.innerHTML = questionName;
    OptionsList.innerHTML = OptionsText;
    const answers = OptionsList.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
        answers[i].setAttribute("onclick", "answersSelected(this)");

    }
}

let checkIcon = '<div class="icon check"><i class="fa-solid fa-check-double"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';


function answersSelected(answer) {
    let UserAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = OptionsList.children.length;
    if (UserAnswer == correctAnswer) {
        console.log("Answer is Correct!");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", checkIcon);
    }
    else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong!");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allOptions; i++) {
            if (OptionsList.children[i].textContent == correctAnswer) {
                OptionsList.children[i].setAttribute("class", "answers correct");
                OptionsList.children[i].insertAdjacentHTML("beforeend", checkIcon);
            }
        }

        /* Disabel all options if user pressed an answer */
        for (let i = 0; i < allOptions; i++) {
            OptionsList.children[i].classList.add("disabled");

        }


    }


function questionCounter(index) {
    const bottomCounter = quizContainer.querySelector(".total-questions");
    let totalQuestionText = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomCounter.innerHTML = totalQuestionText;
} }
