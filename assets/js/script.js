/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const continueBtn = document.querySelector(".buttons .continuebtn");
const quizContainer = document.querySelector(".quiz-game-container");
const playAgainbutton = document.querySelector(".btn .play-again-btn");
const scoreSection = document.querySelector("score-section");
const OptionsList = document.querySelector(".answers-options-list");
const timeCounter = quizContainer.querySelector(".timer .timer-sec");




/* Show Level section if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); /* Show level section if pressed */
};


continueBtn.onclick = () => {
    infoContainer.classList.remove("activeInfo"); /* hide the info section */
    quizContainer.classList.add("activeQuiz"); /* Show the quiz section */
    getQuestions(0);
    questionCounter(1);
    startTimer(10);
};

let questionCount = 0;
let questionNumb = 1;
let timeCount;
let timeValue = 10;
let userScore = 0;


const nextButton = quizContainer.querySelector(".next-button");
const resultContainer = document.querySelector(".result-container");
const restartQuiz = resultContainer.querySelector(".btn .play-again-btn");

/* If next button is pressed */
nextButton.onclick = () => {
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
        showResultContainer();
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
    clearInterval(timeCount);
    let UserAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = OptionsList.children.length;
    if (UserAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
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

    }

    /* Disabel all options if user pressed an answer */
    for (let i = 0; i < allOptions; i++) {
        OptionsList.children[i].classList.add("disabled");

    }

    nextButton.style.display = "block";




}


function showResultContainer() {
    infoContainer.classList.remove("activeInfo"); /* Hide the info Container */
    quizContainer.classList.remove("activeQuiz"); /* Hide the quiz Container */
    resultContainer.classList.add("activeResult");/* Show the result Container */
    const scoreText = resultContainer.querySelector(".score");
    if (userScore < 4) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>right. Better luck next time..</span>';
        scoreText.innerHTML = scoreT;
    }

    else if (userScore >= 4 && userScore <= 6) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>right. You can do better!</span>';
        scoreText.innerHTML = scoreT;
    }

    else if (userScore >= 7) {
        let scoreT = '<span>You got<p>' + userScore + '</p>out of<p>' + questions.length + '</p>right. That is more like it!</span>';
        scoreText.innerHTML = scoreT;
    }

}

function startTimer(time) {
    timeCount = setInterval(timer, 1000);
    function timer() {
        timeCounter.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(timeCount);
        }
    }

}








function questionCounter(index) {
    const bottomCounter = quizContainer.querySelector(".total-questions");
    let totalQuestionText = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomCounter.innerHTML = totalQuestionText;
}
