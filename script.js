//Assign start button
var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var results = document.getElementById("results-container")
var questionContainerElements = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var timerElement = document.getElementById("timer")

let currentQuestionIndex = score = 0;
let timer = 30
let timerHandle = null

startButton.addEventListener("click", startQuiz)

// Timer Function
function timerUpdate() {
    timer -- 
    timerElement.textContent = timer
    if (timer == 0) {
        endQuiz()
    }
}

//Starting the quiz/ pressing start button
function startQuiz() {
    timerHandle = setInterval(timerUpdate, 1000);
    //console.log("start the quiz")
    startButton.classList.add("hide")
    questionContainerElements.classList.remove("hide")
    setNextQuestion()
}

//Going to next question/ pressing the next button
function setNextQuestion () {
    //resetState() /////////
    showQuestion(questions[currentQuestionIndex]);
}
//Taking a question from question object with the array
function showQuestion(question) {
    questionElement.innerText = question.question
    answerButtonsElement.textContent="";
    question.answer.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        //if (answer.correct) {
            button.dataset.correct = answer.correct
            //button.setAttribute("data", "correct:" + String (answer.correct))
        //}
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
// Function for restarting settings for next question /////////////////////
//function resetState() {
    //nextButton.classList.add("hide")
    //while (answerButtonsElement.firstChild) {
        //answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    //}
}
//After selecting an answer
function selectAnswer(event) {
    console.log(event.target.dataset.correct)
    //button element
    if(event.target.dataset.correct == "true") {
        score = 13 + score 
    }
    else {
        timer -= 2
    }
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length) {
        setNextQuestion()
    }
    else {
        endQuiz()
    }

}
// End quiz
function endQuiz() {
    score = score * timer
    results.textContent = "you score = " + score;
    results.classList.remove("hide");
    questionContainerElements.classList.add("hide");
    clearInterval(timerHandle)
    timerHandle = null
}

//Set questions in an array
var questions = [
    {
        question: "What is JavaScript?",
        answer: [
            { text: "A type of flower", correct: false },
            { text: "A scripting language", correct: true},
            { text: "Someones lost hat", correct: false},
            { text: "The color of bacteria under a microscope", correct: false},
        ]
    },
    {
        question: "What is one of the JavaScript Data Types?",
        answer: [
            { text: "Boolean", correct: true},
            { text: "Function", correct: false},
            { text: "Data Types", correct: false},
            { text: "Burpees", correct: false},
        ]
    },
    {
        question: "What kind of tag does JavaScript live in on htlm?",
        answer: [
            { text: "<meta charste='pick me' />", correct: false },
            { text: "<button></button>", correct: false},
            { text: "<div></div>", correct: false},
            { text: "<script></script>", correct: true},
        ]
    },
    {
        question: "What does the method 'document.getElementById' do?",
        answer: [
            { text: "It calls headquarters for backup", correct: false },
            { text: "It allows JavaScript to access the main browsing page", correct: false},
            { text: "It returns the element that has the ID attribute", correct: true},
            { text: "It sends flowers to your grandmother", correct: false},
        ]
    },
    {
        question: "Why do we create variables in JavaScript?",
        answer: [
            { text: "They hold data value and declare a variable", correct: true},
            { text: "They create music notes for the css style sheet", correct: false},
            { text: "They help protect your computer from viruses", correct: false},
            { text: "They assign an object to an array with an element", correct: false},
        ]
    },
];