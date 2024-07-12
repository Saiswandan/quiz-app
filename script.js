const questions = [
    {
        question: "Who is known as the 'God of Cricket'?",
        answers: [
            { text: "Sachin Tendulkar", correct: true },
            { text: "Virat Kohli", correct: false },
            { text: "Rahul Dravid", correct: false },
            { text: "MS Dhoni", correct: false }
        ]
    },
    {
        question: "Which country won the ICC Cricket World Cup in 2019?",
        answers: [
            { text: "India", correct: false },
            { text: "Australia", correct: false },
            { text: "England", correct: true },
            { text: "New Zealand", correct: false }
        ]
    },

    {


    question: "Which country won the ICC Cricket World Cup in 2011?",
    answers: [
        { text: "India", correct: true },
        { text: "Australia", correct: false },
        { text: "England", correct: false },
        { text: "New Zealand", correct: false }
    ]
},

{

question: "Which country won the ICC Cricket  t20 World Cup in 2007?",
answers: [
    { text: "India", correct: true },
    { text: "Australia", correct: false },
    { text: "England", correct: false },
    { text: "New Zealand", correct: false }
]
}


];

let currentQuestionIndex = 0;
let score = 0;
let timerSeconds = 60;
let timerInterval;

function displayQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestionIndex].question;

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });

    updateScore();
}

function selectAnswer(correct) {
    if (correct) {
        score += 10; 
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds--;
        const timerElement = document.getElementById("timer");
        timerElement.textContent = timerSeconds;

        if (timerSeconds === 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    const nextButton = document.getElementById("next-button");
    nextButton.disabled = true;
    nextButton.textContent = "Quiz Completed";

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    const questionText = document.getElementById("question-text");
    questionText.textContent = "Quiz Completed!";

    const timerElement = document.getElementById("timer");
    timerElement.textContent = "0 seconds";

    const status = document.getElementById("status");
    status.innerHTML = `<p>Final Score: <span id="final-score">${score}</span></p>`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
}

displayQuestion();
startTimer(); 
